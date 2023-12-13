import { createContext, useReducer } from "react";

export const MealContext = createContext();

export const mealsReducer = (state, action) => {
  switch (action.type) {
    case "SET_MEAL":
      return {
        meals: action.payload,
      };
    case "CREATE_MEAL":
      return {
        meals: [action.payload, ...state.meals],
      };
    case "DELETE_MEAL":
      return {
        meals: state.meals.filter((meal) => meal._id !== action.payload._id),
      };
    case "EDIT_MEAL":
      return {
        meals: state.meals.map((meal) =>
          meal._id === action.payload._id ? action.payload : meal
        ),
      };
    default:
      return state;
  }
};

export const MealContextProvider = ({ children }) => {
  //the children property represents the app property that we wrapped in index js
  const [state, dispatch] = useReducer(mealsReducer, {
    meals: null,
  });

  return (
    <MealContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MealContext.Provider>
  );
};
