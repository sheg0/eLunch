import { ShoppinglistContext } from "../context/ShoppinglistContext";
import { useContext } from "react";

export const useShoppinglistContext = () => {
  const context = useContext(ShoppinglistContext); //context has now dispatch and state properties

  if (!context) {
    throw Error("useShoppinglistContext must be used inside an ShoppinglistContextProvider");
  }

  return context;
};
