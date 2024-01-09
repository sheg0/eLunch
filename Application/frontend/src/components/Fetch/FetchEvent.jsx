import { useEventsContext } from "../../hooks/useEventsContext.js";
import { useEffect } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Routes, Route } from "react-router-dom";
import Events from "../../pages/Events.jsx";
import Shoppinglist from "../Shoppinglist/Shoppinglist.jsx";

function FetchEvent() {
  const { events, dispatch } = useEventsContext();
  const { keycloak, initialized } = useKeycloak();

  useEffect(() => {
    if (initialized && keycloak.authenticated) {
      try {
        const fetchEvent = async () => {
          const response = await fetch("/api/events", {
            headers: { Authorization: `Bearer ${keycloak.token}` },
          });
          const json = await response.json();

          if (response.ok) {
            dispatch({ type: "SET_EVENT", payload: json });
          }
        };

        fetchEvent();
      } catch (error) {
        console.log("Error:", error);
      }
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/Events" element={<Events events={events} />} />
      <Route path="/Shoppinglist" element={<Shoppinglist events={events} />} />
    </Routes>
  );
}

export default FetchEvent;
