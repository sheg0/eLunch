import { useEventsContext } from "../../hooks/useEventsContext.js";
import { useEffect } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Routes, Route } from "react-router-dom";

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
          } else if (!response.ok) {
            throw new Error(
              `Failed to fetch events. Status: ${response.status}`
            );
          }
        };

        fetchEvent();
      } catch (error) {
        console.log("Error:", error);
      }
    }
  }, [dispatch]);

  return <Routes></Routes>;
}

export default FetchEvent;
