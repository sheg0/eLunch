import { MealEventContext } from "../context/ContextCollection";
import { useContext } from "react";

export const useMealsEventsContext = () => {
  const context = useContext(MealEventContext);

  if (!context) {
    throw Error("useEventsContext must be used inside an EventContextProvider");
  }

  return context;
};
