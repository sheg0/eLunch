import { useContext } from "react";
import { CalendarContext } from "../../context/CalendarContext";

const TodayButton = () => {
  const { goToCurrentDate } = useContext(CalendarContext);
  return (
    <div className="calendar-btn-container">
      <button className="calendar-today-btn" onClick={goToCurrentDate}>
        today
      </button>
    </div>
  );
};

export default TodayButton;
