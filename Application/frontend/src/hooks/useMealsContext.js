import { MealContext } from "../context/MealContext";
import { useContext } from "react";

export const useMealsContext = () => {
  const context = useContext(MealContext); //context has now dispatch and state properties

  if (!context) {
    throw Error("useMealsContext must be used inside an MealsContextProvider");
  }

  return context;
};
