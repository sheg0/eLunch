import "./CalendarComponent.css";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import EventElement from "./EventElement";
import { SlArrowDown } from "react-icons/sl";
import CalendarHeader from "./CalendarHeader";
import { useCalendarContext } from "../../hooks/useCalendarContext";
import { useEventsContext } from "../../hooks/useEventsContext";
import { EventModal } from "../Modal/EventModal/EventModal";
import { useState } from "react";

const Calendar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                      <Button
                        variant="contained"
                        onClick={() => setIsModalOpen(!isModalOpen)}
                      >
                        + Neues Event
                      </Button>
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
      <EventModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}></EventModal>
    </Container>
  );
};

export default Calendar;
