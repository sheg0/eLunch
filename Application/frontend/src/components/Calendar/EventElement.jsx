import React from "react";
import "./EventElement.css";

function EventElement({}) {
  const event = new Date();
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const formattedTime = new Intl.DateTimeFormat("de-DE", options).format(
    event.date
  );

  console.log("Formatted Time:", formattedTime);

  return (
    <div className="meal-container">
      <p1>{formattedTime}</p1>
      <p>Schupfnudeln mit Kraut</p>
    </div>
  );
}

export default EventElement;
