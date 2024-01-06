import { FinanceContext } from "../context/FinanceContext";
import { useContext } from "react";

export const useFinanceContext = () => {
  const context = useContext(FinanceContext); //context has now dispatch and state properties

  if (!context) {
    throw Error("useEventsContext must be used inside an EventContextProvider");
  }

  return context;
};
