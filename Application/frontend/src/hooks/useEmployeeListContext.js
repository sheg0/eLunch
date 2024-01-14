import { EmployeeListContext } from "../context/EmployeeListContext";
import { useContext } from "react";

export const useEmployeeListContext = () => {
  const context = useContext(EmployeeListContext);

  if (!context) {
    throw Error(
      "useEmployeeListContext must be used inside an EmployeeListContextProvider"
    );
  }

  return context;
};
