import { createContext, useReducer } from "react";

export const ShoppinglistContext = createContext();

export const shoppinglistReducer = (state, action) => {
  //shoppinglistReducer
  switch (action.type) {
    case "SET_SHOPPINGLIST":
      return {
        shoppinglists: action.payload,
      };
    case "CREATE_SHOPPINGLIST":
      return {
        shoppinglists: [action.payload, ...state.shoppinglists],
      };
    case "DELETE_SHOPPINGLIST":
      return {
        shoppinglists: state.shoppinglists.filter(
          (shoppinglist) => shoppinglist._id !== action.payload._id
        ),
      };

    case "UPDATE_SHOPPINGLIST":
      return {
        shoppinglists: state.shoppinglists.map((shoppinglist) =>
          shoppinglist._id === action.payload._id
            ? action.payload
            : shoppinglist
        ),
      };
    default:
      return state;
  }
};

export const ShoppinglistContextProvider = ({ children }) => {
  //the children property represents the app property that we wrapped in index js
  const [state, dispatch] = useReducer(shoppinglistReducer, {
    shoppinglists: [],
  });

  return (
    <ShoppinglistContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ShoppinglistContext.Provider>
  );
};
