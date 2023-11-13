import { EventContext } from "../context/EventContext";
import { useContext } from "react";

export const useEventsContext = () => {
  const context = useContext(EventContext); //context has now dispatch and state properties

  if (!context) {
    throw Error("useEventsContext must be used inside an EventContextProvider");
  }

  return context;
};
