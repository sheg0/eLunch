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
    setEvent,
  } = useCalendarContext();

  const { events } = useEventsContext();

  const handleEventClick = (event) => {
    currentEvent = event;
    console.log("NEW EVENT:", currentEvent);
    setIsDetailModalOpen(!isDetailModalOpen);
  };
  return (
    <div className="calendar-app-container">
      <div className="calendar">
        {isMonthVisible ? (
          <div>
            <CalendarHeader
              onClickArrowLeft={goToPreviousMonth}
              onClickArrowRight={goToNextMonth}
            />
            <div className="calendar-field">
              <div className="calendar-dates">
                {previousMonthDays.map((day) => (
                  <div className="calendar-date previous-month">{day}</div>
                ))}
                {calendarDays.map((day, index) => (
                  <div key={index} className="calendar-date">
                    <div key={day}>{day}</div>
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
                  <div className="calendar-date next-month">{day}</div>
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
              <div className="calendar-weeks">
                {getWeekDays().map((day) => (
                  <div key={day.toISOString()}>
                    <div className="calendar-dateWeek">
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
        <div className="calendar-btn-container">
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
        handleSubscribeClick={subscribeEvent}
        handleUnsubscribeClick={unsubscribeEvent}
        setEvent={setEvent}
      ></EventDetailModal>
    </div>
  );
};

export default Calendar;
