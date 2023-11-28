import { useMealsEventsContext } from "../hooks/useMealEventContext.js";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Events from "../pages/Events.jsx";
//pages
import Home from "../pages/Home";
import List from "../pages/List";
import Calendar from "../pages/Calendar";
import Info from "../components/Info/Info.jsx";
import MealList from "../pages/MealList.jsx";

export default function Fetch() {
  //const { meals, dispatch } = useMealsContext();
  const { events, meals, dispatch } = useMealsEventsContext();

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

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await fetch("/api/events");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_EVENT", payload: json });
      }
    };

    fetchEvent();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home meals={meals} />} />
      <Route path="/List" element={<MealList meals={meals} />} />
      <Route path="/Calendar" element={<Calendar meals={meals} />} />
      <Route path="/Info" element={<Info />} />
      <Route path="/Events" element={<Events events={events} />} />
    </Routes>
  );
}
