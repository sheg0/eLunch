import React from "react";
import "./EventElement.css";
import { useCalendarContext } from "../../hooks/useCalendarContext";

function EventElement({ event, handleEventClick }) {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const formattedTime = new Intl.DateTimeFormat("de-DE", options).format(
    new Date(event.date)
  );

  return (
    <div
      onClick={() => handleEventClick(event)}
      variant="outlined"
      className="meal-container"
    >
      <p1>{formattedTime}</p1>
      <p></p>
      <p>{event.meal.name}</p>
    </div>
  );
}

export default EventElement;
