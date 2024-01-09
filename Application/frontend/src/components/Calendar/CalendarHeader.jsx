import Weekdays from "./Weekdays";
import TodayButton from "./TodayButton";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useContext } from "react";
import { CalendarContext } from "../../context/CalendarContext";

const CalendarHeader = ({ onClickArrowLeft, onClickArrowRight }) => {
  const { year, month } = useContext(CalendarContext);
  return (
    <>
      <div className="Calendar-Header">
        <button className="Calendar-Button" onClick={onClickArrowLeft}>
          <SlArrowLeft />
        </button>
        <h2>
          {new Date(year, month).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button className="Calendar-Button" onClick={onClickArrowRight}>
          <SlArrowRight />
        </button>
      </div>

      <TodayButton />

      <Weekdays />
    </>
  );
};

export default CalendarHeader;
