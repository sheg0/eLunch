import { FinanceDispatchContext } from "../context/FinanceDispatchContext";
import { useContext } from "react";

export const useFinanceDispatchContext = () => {
  const context = useContext(FinanceDispatchContext); //context has now dispatch and state properties

  if (!context) {
    throw Error("useEventsContext must be used inside an EventContextProvider");
  }

  return context;
};
