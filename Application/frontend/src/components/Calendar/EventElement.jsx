import React from "react";
import "./EventElement.css";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";
import { Button } from "@mui/material";

function EventElement({
  handleEventClick,
  event,
  handleSubscribeClick,
  handleUnsubscribeClick,
}) {
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
      <p>{event.meal.name}</p>
      <IconButton onClick={() => handleSubscribeClick(event)}>
        <CheckIcon />
      </IconButton>
      <IconButton onClick={() => handleUnsubscribeClick(event)}>
        <CancelIcon />
      </IconButton>
    </div>
  );
}

export default EventElement;
