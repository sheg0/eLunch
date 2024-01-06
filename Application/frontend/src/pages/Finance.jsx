import { useState, useEffect } from "react";
import Finance from "../components/Finance";
import { FinanceDispatchContextProvider } from "../context/FinanceDispatchContext";

import { FinanceProvider } from "../context/FinanceContext.jsx";

const Fin = ({ finances }) => {
  console.log("finance Page: ", finances);
  return (
    <FinanceProvider>
      <Finance finances={finances}></Finance>
    </FinanceProvider>
  );
};

export default Fin;
