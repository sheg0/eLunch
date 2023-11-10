import React from "react";
import { useNavigate } from "react-router-dom";

function NavigationSection() {
  const navigate = useNavigate();

  function SwitchPath(path) {
    switch (path) {
      case 1:
        return navigate("/");
      case 2:
        return navigate("/List");
      case 3:
        return navigate("/Calendar");
      case 4:
        return navigate("/");
      case 5:
        return navigate("/");
      case 6:
        return navigate("/");
      case 7:
        return navigate("/");
      default:
        return navigate("/");
    }
  }

  return (
    <section>
      <button onClick={() => SwitchPath(1)}>Home</button>
      <button onClick={() => SwitchPath(2)}>List</button>
      <button onClick={() => SwitchPath(3)}>Calendar</button>
    </section>
  );
}

export default NavigationSection;
