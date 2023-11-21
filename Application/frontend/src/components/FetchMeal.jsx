import { useMealsContext } from "../hooks/useMealsContext";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//pages
import Home from "../pages/Home";
import List from "../pages/List";
import Calendar from "../pages/Calendar";
import Info from "../components/Info.jsx";

function FetchMeal() {
  const { meals, dispatch } = useMealsContext();

  useEffect(() => {
    const fetchMeal = async () => {
      const response = await fetch("/api/meals");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_MEAL", payload: json });
      }
    };

    fetchMeal();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home meals={meals} />} />
      <Route path="/List" element={<List meals={meals} />} />
      <Route path="/Calendar" element={<Calendar meals={meals} />} />
      <Route path="/Info" element={<Info />} />
    </Routes>
  );
}

export default FetchMeal;
