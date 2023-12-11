import "./CalendarComponent.css";
import { Container } from "@mui/material";
import AddMeal from "../AddMeal/AddMeal";
import EventElement from "./EventElement";
import { SlArrowDown } from "react-icons/sl";
import CalendarHeader from "./CalendarHeader";
import { useCalendarContext } from "../../hooks/useCalendarContext";

const Calendar = () => {
  const {
    calendarDays,
    getWeekDays,
    goToPreviousWeek,
    goToNextWeek,
    nextMonthDays,
    goToPreviousMonth,
    goToNextMonth,
    previousMonthDays,
    isMonthVisible,
    handleButtonClick,
  } = useCalendarContext();

  return (
    <Container>
      <div className="calendar">
        {isMonthVisible ? (
          <div>
            <CalendarHeader
              onClickArrowLeft={goToPreviousMonth}
              onClickArrowRight={goToNextMonth}
            />
            <div className="field">
              <div className="dates">
                {previousMonthDays.map((day) => (
                  <div className="date previous-month">{day}</div>
                ))}
                {calendarDays.map((day) => (
                  <div className="date">
                    {day}
                    <EventElement></EventElement>
                  </div>
                ))}
                {nextMonthDays.map((day) => (
                  <div className="date next-month">{day}</div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <CalendarHeader
              onClickArrowLeft={goToPreviousWeek}
              onClickArrowRight={goToNextWeek}
            />

            <div>
              <div className="weeks">
                {getWeekDays().map((day) => (
                  <div key={day.toISOString()}>
                    <div className="dateWeek">
                      {day.getDate()}
                      <AddMeal></AddMeal>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="btn-container">
          <button className="calendar-btn week" onClick={handleButtonClick}>
            <SlArrowDown />
          </button>
        </div>

        <div></div>
      </div>
    </Container>
  );
};

/*

*/

export default Calendar;
