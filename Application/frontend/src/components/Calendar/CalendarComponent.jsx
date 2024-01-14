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
import styled from "@emotion/styled";
import dayjs from "dayjs";
import ErrorHandler from "../ErrorHandler";
import { useKeycloak } from "@react-keycloak/web";
import { useFinanceContext } from "../../hooks/useFinanceContext";
import { useEffect } from "react";
const StyledEventButton = styled(Button)({
  fontFamily: "Segoe UI",
  fontWeight: 400,
  color: "white",
  backgroundColor: "#043c5f",
  width: "15vh",
  borderRadius: "1vh",
  marginLeft: "1vh",
  marginBottom: "1vh",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(3, 40, 63, 1)",
  },
});

const Calendar = () => {
  const [isEventModalOpen, setIsEventModal] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isRotated, setIsRotated] = useState(false);

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
    event,
    setEvent,
  } = useCalendarContext();
  const { keycloak, initialized } = useKeycloak();
  const { events } = useEventsContext();
  const { updateBalance, finance } = useFinanceContext();

  const handleSubscribe = (event) => {
    let keyUser = "";
    if (initialized && keycloak.authenticated) {
      keyUser = keycloak.tokenParsed.preferred_username;
    }
    subscribeEvent(event);

    finance.map((fin) => {
      if (fin.userInfo.userName === keyUser) {
        let newBalance = fin.userInfo.balance.$numberDecimal - event.meal.cost;

        updateBalance(keyUser, newBalance);
      }
    });
  };

  const handleUnSubscribe = (event) => {
    let keyUser = "";
    if (initialized && keycloak.authenticated) {
      keyUser = keycloak.tokenParsed.preferred_username;
    }
    unsubscribeEvent(event);

    finance.map((fin) => {
      if (fin.userInfo.userName === keyUser) {
        let newBalance =
          parseInt(fin.userInfo.balance.$numberDecimal) +
          parseInt(event.meal.cost);

        updateBalance(keyUser, newBalance);
      }
    });
  };

  const handleEventClick = (event) => {
    setEvent(event);
    setIsDetailModalOpen(!isDetailModalOpen);
  };
  const handleEventButtonClick = (clickedDate) => {
    setIsEventModal(true);
    setSelectedDate(clickedDate);
  };
  const handleRotation = () => {
    setIsRotated((prev) => !prev);
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
              <div className="calendar-month">
                {previousMonthDays.map((day) => (
                  <div className="calendar-monthDay previous-month">{day}</div>
                ))}

                {calendarDays.map((day, index) => {
                  const dayEvents = getEvents(day, month, year, events);

                  return (
                    <div key={index} className="calendar-monthDay">
                      <div className="monthDay-date" key={day}>
                        {day}
                      </div>
                      <div className="Calendar-EventsContainer-Month">
                        {dayEvents.length > 1 ? (
                          <div className="Calendar-EventsContainer">
                            <EventElement
                              key={0}
                              event={dayEvents[0]}
                              handleEventClick={handleEventClick}
                              handleSubscribeClick={subscribeEvent}
                              handleUnsubscribeClick={unsubscribeEvent}
                            />
                            <div
                              onClick={handleButtonClick}
                              className="Calendar-MoreEvents"
                            >
                              +{dayEvents.length - 1} weitere Events
                            </div>
                          </div>
                        ) : (
                          dayEvents.map((event, index) => (
                            <EventElement
                              key={index}
                              event={event}
                              handleEventClick={handleEventClick}
                              handleSubscribeClick={subscribeEvent}
                              handleUnsubscribeClick={unsubscribeEvent}
                            />
                          ))
                        )}
                      </div>
                    </div>
                  );
                })}

                {nextMonthDays.map((day) => (
                  <div className="calendar-monthDay next-month">{day}</div>
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
              <div className="calendar-week">
                {getWeekDays().map((day) => (
                  <div key={day.toISOString()}>
                    <div className="calendar-weekDay">
                      <div className="weekDay-date">{day.getDate()}</div>
                      <button
                        className="Calendar-NewMeal-Button"
                        onClick={() => handleEventButtonClick(day)}
                      >
                        + Gericht
                      </button>
                      <div className="Calendar-EventsContainer-Week">
                        {getEvents(day.getDate(), month, year, events).map(
                          (event, index) => (
                            <EventElement
                              key={index}
                              event={event}
                              handleEventClick={handleEventClick}
                              handleSubscribeClick={subscribeEvent}
                              handleUnsubscribeClick={unsubscribeEvent}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="Calendar-Button-Container">
          <button
            className={`Calendar-Button week ${isRotated ? "rotate" : ""}`}
            onClick={() => {
              handleButtonClick();
              handleRotation();
            }}
          >
            <SlArrowDown />
          </button>
        </div>
      </div>
      <EventModal
        dates={selectedDate}
        isOpen={isEventModalOpen}
        setIsOpen={setIsEventModal}
        event={event}
      ></EventModal>
      <EventDetailModal
        isOpen={isDetailModalOpen}
        setIsOpen={setIsDetailModalOpen}
        event={event}
        handleSubscribeClick={handleSubscribe}
        handleUnsubscribeClick={handleUnSubscribe}
        setEvent={setEvent}
      ></EventDetailModal>
    </div>
  );
};

export default Calendar;
