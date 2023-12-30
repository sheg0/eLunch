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
import { EventDetailModal } from "../Modal/EventDetailModal/EventDetailModal";

import dayjs from "dayjs";
let currentEvent = {
  date: dayjs(),
  meal: {},
  participants: {},
};

const Calendar = () => {
  const [isEventModalOpen, setIsEventModal] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  console.log("currentEvent: ", currentEvent);
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
    subscribeEvent,
    unsubscribeEvent,
  } = useCalendarContext();

  const { events } = useEventsContext();

  const handleEventClick = (event) => {
    currentEvent = event;
    console.log("NEW EVENT:", currentEvent);
    setIsDetailModalOpen(!isDetailModalOpen);
  };
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
                        (event, index) => (
                          <EventElement
                            handleEventClick={handleEventClick}
                            key={index}
                            event={event}
                            handleSubscribeClick={subscribeEvent}
                            handleUnsubscribeClick={unsubscribeEvent}
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
                        onClick={() => setIsEventModal(!isEventModalOpen)}
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
      <EventModal
        isOpen={isEventModalOpen}
        setIsOpen={setIsEventModal}
      ></EventModal>
      <EventDetailModal
        isOpen={isDetailModalOpen}
        setIsOpen={setIsDetailModalOpen}
        element={currentEvent}
      ></EventDetailModal>
    </Container>
  );
};

export default Calendar;
