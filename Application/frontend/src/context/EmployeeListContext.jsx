import { createContext, useState } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { useEmployeeListContext } from "../hooks/useEmployeeListContext";

export const EmployeeListContext = createContext();

export const EmployeeListProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const { finances, dispatch } = useEmployeeListContext();

  const addEmployeeList = async (userName, first_name, last_name) => {
    const response = await fetch("/api/finance/", {
      method: "POST",
      body: JSON.stringify({
        userInfo: {
          userName: userName,
          firstName: first_name,
          lastName: last_name,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const contextValue = {
    addEmployeeList,
  };

  return (
    <EmployeeListContext.Provider value={contextValue}>
      {children}
    </EmployeeListContext.Provider>
  );
};
