import { useFinanceDispatchContext } from "../../hooks/useFinanceDispatchContext.js";
import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import Fin from "../../pages/Finance.jsx";

function FetchFinance() {
  const { finances, dispatch } = useFinanceDispatchContext();

  useEffect(() => {
    try {
      const fetchFinance = async () => {
        const response = await fetch("/api/finance");
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: "SET_FINANCE", payload: json });
        } else if (!response.ok) {
          throw new Error(`Failed to fetch events. Status: ${response.status}`);
        }
      };

      fetchFinance();
    } catch (error) {
      console.log("Error:", error);
    }
  }, [dispatch]);
  console.log("finance fetch Page: ", finances);
  return (
    <Routes>
      <Route path="/Finance" element={<Fin finances={finances} />} />
    </Routes>
  );
}

export default FetchFinance;
