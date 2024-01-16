import { createContext, useState } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { useEventsContext } from "../hooks/useEventsContext";
import { useEffect } from "react";
export const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  const emptyEvent = {
    date: null,
    meal: null,
    participants: [
      {
        userName: "",
        firstName: "",
        lastName: "",
        isCreator: false,
        isCook: false,
        isBuyer: false,
        isOrganisator: false,
        isIdle: false,
      },
    ],
  };

  const [currentDate, setCurrentDate] = useState(new Date());
  const [isMonthVisible, setMonthVisible] = useState(false);

  const { keycloak } = useKeycloak();
  const { dispatch } = useEventsContext();
  const [event, setEvent] = useState(emptyEvent);

  const handleButtonClick = () => {
    setMonthVisible(!isMonthVisible);
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getWeekday = (year, month, day) => {
    return new Date(year, month, day).getDay();
  };

  const goToCurrentDate = () => {
    setCurrentDate(new Date());
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);

  const firstDayOfMonth = new Date(year, month, 0).getDay();
  const lastDayOfMonth = new Date(year, month, daysInMonth + 1).getDay();

  const previousMonthDays = [];
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    previousMonthDays.push(getDaysInMonth(year, month - 1) - i);
  }

  const nextMonthDays = [];
  for (let i = 1; i <= 6 - lastDayOfMonth; i++) {
    nextMonthDays.push(i);
  }

  let calendarDays = [];
  for (let day = 1; day <= daysInMonth; day++) {
    const weekday = getWeekday(year, month, day);

    if (weekday !== 0 && weekday !== 6) {
      calendarDays.push(day);
    }
  }

  const goToNextWeek = () => {
    setCurrentDate((prevDate) => {
      const nextWeek = new Date(prevDate);
      nextWeek.setDate(nextWeek.getDate() + 7);
      return nextWeek;
    });
  };

  const goToPreviousWeek = () => {
    setCurrentDate((prevDate) => {
      const previousWeek = new Date(prevDate);
      previousWeek.setDate(previousWeek.getDate() - 7);
      return previousWeek;
    });
  };

  const getWeekDays = () => {
    const days = [];
    const weekStart = new Date(currentDate);
    weekStart.setDate(weekStart.getDate() - weekStart.getDay() + 1);

    for (let i = 0; i < 5; i++) {
      const day = new Date(weekStart);
      day.setDate(day.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const getEvents = (day, month, year, events) => {
    const eventList = [];

    if (events !== null) {
      events.forEach((element) => {
        const date = new Date(element.date);

        const eventDay = date.getDate();
        const eventMonth = date.getMonth();
        const eventYear = date.getFullYear();

        if (day === eventDay && month === eventMonth && year === eventYear) {
          eventList.push(element);
        }
      });
    }

    return eventList;
  };

  const subscribeEvent = async (eventItem) => {
    const userData = {
      user: {
        userName: keycloak.tokenParsed.preferred_username,
        firstName: keycloak.tokenParsed.given_name,
        lastName: keycloak.tokenParsed.family_name,
      },
    };
    console.log(userData);

    const response = await fetch("/api/events/subscribe/" + eventItem._id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${keycloak.token}`,
      },
      body: JSON.stringify(userData),
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "EDIT_EVENT", payload: json });
    }
  };

  const unsubscribeEvent = async (eventItem) => {
    const userData = {
      user: {
        userName: keycloak.tokenParsed.preferred_username,
      },
    };
    console.log(userData);

    const response = await fetch("/api/events/unsubscribe/" + eventItem._id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${keycloak.token}`,
      },
      body: JSON.stringify(userData),
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "EDIT_EVENT", payload: json });
    }
  };

  const updateEvent = async (eventItem) => {
    console.log(eventItem);
    const response = await fetch("/api/events/" + eventItem._id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${keycloak.token}`,
      },
      body: JSON.stringify({
        ...eventItem,
      }),
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "EDIT_EVENT", payload: json });
    }
  };

  const deleteEvent = async (eventItem) => {
    console.log("event id", eventItem._id);
    const response = await fetch("/api/events/" + eventItem._id, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${keycloak.token}` },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_EVENT", payload: json });
    }
  };

  const contextValue = {
    month,
    year,
    calendarDays,
    getWeekDays,
    goToPreviousWeek,
    goToNextWeek,
    nextMonthDays,
    goToPreviousMonth,
    goToNextMonth,
    goToCurrentDate,
    previousMonthDays,
    isMonthVisible,
    handleButtonClick,
    getEvents,
    subscribeEvent,
    unsubscribeEvent,
    updateEvent,
    event,
    setEvent,
    deleteEvent,
  };

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};
