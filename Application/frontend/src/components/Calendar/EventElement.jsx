import React from "react";
import "./EventElement.css";

function EventElement({ event }) {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const formattedTime = new Intl.DateTimeFormat("de-DE", options).format(
    new Date(event.date)
  );

  console.log(event);
  return (
    <div className="meal-container">
      <p1>{formattedTime}</p1>
      <p>{event.meal.name}</p>
    </div>
  );
}

export default EventElement;
