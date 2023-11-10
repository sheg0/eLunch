import React from "react";
import { useNavigate } from "react-router-dom";

function NavigationSection() {
  const navigate = useNavigate();

  const navigateToList = () => {
    navigate("/List");
  };

  const navigateHome = () => {
    navigate("/");
  };

  const navigateToCalender = () => {
    navigate("/Calendar");
  };

  return (
    <section>
      <button onClick={navigateHome}>Home</button>
      <button onClick={navigateToList}>List</button>
      <button onClick={navigateToCalender}>Calendar</button>
    </section>
  );
}

export default NavigationSection;
