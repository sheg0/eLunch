import { useMealsContext } from "../hooks/useMealsContext";
import { useEffect } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Routes, Route } from "react-router-dom";

//pages
import Home from "../pages/Home";
import Calendar from "../pages/Calendar";
import Info from "../components/Info/Info.jsx";
import MealList from "../pages/MealList.jsx";

function FetchMeal() {
  const { meals, dispatch } = useMealsContext();
  const { keycloak, initialized } = useKeycloak();

  console.log(keycloak.token);

  useEffect(() => {
    if (initialized && keycloak.authenticated) {
      const fetchMeal = async () => {
        try {
          const response = await fetch("/api/meals", {
            headers: { Authorization: `Bearer ${keycloak.token}` },
          });
          const json = await response.json();

          if (response.ok) {
            dispatch({ type: "SET_MEAL", payload: json });
          }
        } catch (error) {
          console.log("Error:", error);
        }
      };

      fetchMeal();
    }
  }, [initialized, keycloak, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home meals={meals} />} />
      <Route path="/List" element={<MealList meals={meals} />} />
      <Route path="/Calendar" element={<Calendar meals={meals} />} />
      <Route path="/Info" element={<Info />} />
    </Routes>
  );
}

export default FetchMeal;
