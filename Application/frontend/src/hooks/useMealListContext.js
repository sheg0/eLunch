import { useContext } from "react";
import { MealListContext } from "../context/MealListContext";

export const useMealListContext = () => {
  const context = useContext(MealListContext); //context has now dispatch and state properties

  if (!context) {
    throw Error(
      "useMealListContext must be used inside an MealListContextProvider"
    );
  }

  return context;
};
