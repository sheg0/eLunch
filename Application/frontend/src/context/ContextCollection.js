import { createContext, useReducer } from "react";

export const MealEventContext = createContext({
  meals: [],
  events: [],
  dispatch: () => {},
  //addItemToCart: () => {},
  //handleUpdate: () => {},
});

export const mealsEventsReducer = (state, action) => {
  //mealsReducer
  switch (action.type) {
    case "SET_EVENT":
      return {
        events: action.payload,
      };
    case "CREATE_EVENT":
      return {
        events: [action.payload, ...state.events],
      };
    case "DELETE_EVENT":
      return {
        events: state.events.filter((w) => w._id !== action.payload._id),
      };
    case "EDIT_EVENT":
      return {
        events: state.events.map((event) =>
          event._id === action.payload._id ? action.payload : event
        ),
      };
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
        meals: state.meals.filter((w) => w._id !== action.payload._id),
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

export const MealEventContextProvider = ({ children }) => {
  //the children property represents the app property that we wrapped in index js
  const [state, dispatch] = useReducer(mealsEventsReducer, {
    meals: [],
    events: [],
  });

  const ctxValue = {
    meals: state.meals, //shoppingCart.items,
    events: state.events,
    dispatch: dispatch,
  };

  return (
    <MealEventContext.Provider value={ctxValue}>
      {children}
    </MealEventContext.Provider>
  );
};
