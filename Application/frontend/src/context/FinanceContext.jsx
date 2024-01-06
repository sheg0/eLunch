import { createContext, useState } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { useFinanceDispatchContext } from "../hooks/useFinanceDispatchContext";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const { finances, dispatch } = useFinanceDispatchContext();

  const addFinance = async (userName, first_name, last_name) => {
    const response = await fetch("/api/finance/", {
      method: "POST",
      body: JSON.stringify({
        userInfo: {
          userName: userName,
          firstName: first_name,
          lastName: last_name,
          activities: ["dasdsad", "dasdasdsa"],
          balance: 100.5,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "CREATE_FINANCE", payload: json });
      console.log(json);
    }
  };

  const contextValue = {
    addFinance,
    finance: finances,
  };
  console.log(finances);
  return (
    <FinanceContext.Provider value={contextValue}>
      {children}
    </FinanceContext.Provider>
  );
};
