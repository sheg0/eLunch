import { EventContextProvider } from "./EventContext";
import { MealContextProvider } from "./MealContext";

export const ContextProvider = ({ children }) => {
  //the children property represents the app property that we wrapped in index js

  return (
    <div>
      <MealContextProvider>{children}</MealContextProvider>
      <EventContextProvider>{children} </EventContextProvider>
    </div>
  );
};
