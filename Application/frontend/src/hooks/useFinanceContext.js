import { FinanceContext } from "../context/FinanceContext";
import { useContext } from "react";

export const useFinanceContext = () => {
  const context = useContext(FinanceContext); //context has now dispatch and state properties

  if (!context) {
    throw Error(
      "useFinanceContext must be used inside an FinanceContextProvider"
    );
  }

  return context;
};
