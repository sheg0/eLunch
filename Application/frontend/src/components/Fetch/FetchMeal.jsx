import { useMealsContext } from "../../hooks/useMealsContext.js";
import { useEffect } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Routes, Route } from "react-router-dom";

//pages
//import List from "../pages/List";
//import Calendar from "./Calendar/CalendarComponent.jsx";
import Cal from "../../pages/Calendar.jsx";
import Info from "../Info/Info.jsx";
//import MealList from "./MealList/MealList.jsx";
import List from "../../pages/List.jsx";

function FetchMeal() {
  const { meals, dispatch } = useMealsContext();
  const { keycloak, initialized } = useKeycloak();

  //console.log(keycloak.token);

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
      <Route path="/" element={<Cal meals={meals} />} />
      <Route path="/List" element={<List meals={meals} />} />
      <Route path="/Calendar" element={<Cal meals={meals} />} />
      <Route path="/Info" element={<Info />} />
    </Routes>
  );
}

export default FetchMeal;
