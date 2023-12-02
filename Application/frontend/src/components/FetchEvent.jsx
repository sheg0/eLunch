import { useEventsContext } from "../hooks/useEventsContext";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Events from "../pages/Events.jsx";

function FetchEvent() {
  const { events, dispatch } = useEventsContext();

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
      <Route path="/Events" element={<Events events={events} />} />
    </Routes>
  );
}

export default FetchEvent;
