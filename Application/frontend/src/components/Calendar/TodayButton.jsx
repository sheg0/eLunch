import { useContext } from "react";
import { CalendarContext } from "../../context/CalendarContext";

const TodayButton = () => {
  const { goToCurrentDate } = useContext(CalendarContext);
  return (
    <div className="Calendar-Button-Container">
      <button className="Calendar-Today-Button" onClick={goToCurrentDate}>
        zurück zu Heute
      </button>
    </div>
  );
};

export default TodayButton;
