import { createContext, useReducer } from "react";

export const FinanceContext = createContext();

export const financesReducer = (state, action) => {
  //mealsReducer
  switch (action.type) {
    case "SET_FINANCE":
      return {
        finances: action.payload,
      };
    case "CREATE_FINANCE":
      return {
        finances: [action.payload, ...state.finances],
      };
    case "DELETE_FINANCE":
      return {
        finances: state.finances.filter(
          (finance) => finance._id !== action.payload._id
        ),
      };
    case "EDIT_FINANCE":
      return {
        finances: state.finances.map((finance) =>
          finance._id === action.payload._id ? action.payload : finance
        ),
      };
    default:
      return state;
  }
};

export const FinanceContextProvider = ({ children }) => {
  //the children property represents the app property that we wrapped in index js
  const [state, dispatch] = useReducer(financesReducer, {
    finances: null,
  });

  return (
    <FinanceContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FinanceContext.Provider>
  );
};
