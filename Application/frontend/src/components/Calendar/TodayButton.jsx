import { useContext } from "react";
import { CalendarContext } from "../../context/CalendarContext";

const TodayButton = () => {
  const { goToCurrentDate } = useContext(CalendarContext);
  return (
    <div className="btn-container">
      <button className="todayBtn" onClick={goToCurrentDate}>
        today
      </button>
    </div>
  );
};

export default TodayButton;
