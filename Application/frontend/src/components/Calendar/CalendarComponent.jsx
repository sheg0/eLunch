import "./CalendarComponent.css";
import { Container } from "@mui/material";
import AddEvent from "../AddMeal/AddEvent";
import EventElement from "./EventElement";
import { SlArrowDown } from "react-icons/sl";
import CalendarHeader from "./CalendarHeader";
import { useCalendarContext } from "../../hooks/useCalendarContext";
import { useEventsContext } from "../../hooks/useEventsContext";

const Calendar = () => {
  const {
    month,
    year,
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
    getEvents,
  } = useCalendarContext();

  const { events } = useEventsContext();

  console.log(events);
  console.log(`Month: ${month} Year: ${year}`);

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
                {calendarDays.map((day, index) => (
                  <div key={index} className="date">
                    <div className="calendar-day" key={day}>
                      {day}
                    </div>
                    {getEvents(day, month, year, events).length !== 0 &&
                      getEvents(day, month, year, events).map(
                        (element, index) => (
                          <EventElement
                            key={index}
                            event={element}
                          ></EventElement>
                        )
                      )}
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
                      <AddEvent></AddEvent>
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
      </div>
    </Container>
  );
};

export default Calendar;
