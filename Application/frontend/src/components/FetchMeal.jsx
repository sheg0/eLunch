import { useMealsContext } from "../hooks/useMealsContext";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

//pages
import Home from "../pages/Home";
import Calendar from "../pages/Calendar";
import Info from "../components/Info/Info.jsx";
import MealList from "../pages/MealList.jsx";

function FetchMeal() {
  const { keycloak, initialized } = useKeycloak();
  const { meals, dispatch } = useMealsContext();

  useEffect(() => {
    if (initialized && keycloak.authenticated) {
      const fetchMeals = async () => {
        try {
          const response = await fetch("/api/meals", {
            headers: { Authorization: `Bearer ${keycloak.token}` },
          });
          const json = await response.json();

          if (response.ok) {
            dispatch({ type: "SET_MEAL", payload: json });
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

      fetchMeals();
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
