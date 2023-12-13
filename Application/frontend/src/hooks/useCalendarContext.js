import { useContext } from "react";
import { CalendarContext } from "../context/CalendarContext";

export const useCalendarContext = () => {
  const context = useContext(CalendarContext); //context has now dispatch and state properties

  if (!context) {
    throw Error(
      "useCalendarContext must be used inside an CalendarContextProvider"
    );
  }

  return context;
};
