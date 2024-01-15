import { createContext, useState } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { useFinanceDispatchContext } from "../hooks/useFinanceDispatchContext";
import dayjs from "dayjs";
export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const { finances, dispatch } = useFinanceDispatchContext();
  console.log("finances", finances);

  const addFinance = async (userName, first_name, last_name) => {
    const response = await fetch("/api/finance/", {
      method: "POST",
      body: JSON.stringify({
        userInfo: {
          userName: userName,
          firstName: first_name,
          lastName: last_name,
          activities: ["name", "date", "remark", "amount"],
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

  const updateBalance = async (userName, newBalance) => {
    const response = await fetch(`/api/finance/${userName}`, {
      method: "PATCH",
      body: JSON.stringify({
        newBalance,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "UPDATE_FINANCE", payload: json });
      console.log(json);
    }
  };

  const addActivities = async (
    userName,
    description,
    amount,
    sign,
    sendTo,
    receivedFrom
  ) => {
    const response = await fetch(`/api/finance/activities/${userName}`, {
      method: "PATCH",
      body: JSON.stringify({
        amount,
        sign,
        description,
        sendTo,
        receivedFrom,
        date: dayjs(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (response.ok) {
      console.log("aktivitäten", userName);
      // Annahme: Redux wird verwendet, 'ADD_ACTIVITY' ist Ihre Aktion in Redux
      dispatch({ type: "UPDATE_FINANCE", payload: json });
      console.log(json);
    } else {
      console.error("Fehler beim Hinzufügen der Aktivität:", json);
    }
  };

  const contextValue = {
    balance,
    setBalance,
    updateBalance,
    addFinance,
    addActivities,
    finance: finances,
  };

  //console.log(finances);
  return (
    <FinanceContext.Provider value={contextValue}>
      {children}
    </FinanceContext.Provider>
  );
};
