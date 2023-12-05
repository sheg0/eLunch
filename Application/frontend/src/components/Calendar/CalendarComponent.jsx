import React, { useState } from "react";
import "./CalendarComponent.css";
import { Container } from "@mui/material";
import AddMeal from "../AddMeal/AddMeal";
import MealView from "../MealInCalendar/MealInCalendar";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

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
      calendarDays.push(
        <div className="calendar-day" key={day}>
          {day}
        </div>
      );
    }
  }

  return (
    <Container>
      <div className="calendar">
        <div className="header">
          <button className="calendar-btn" onClick={goToPreviousMonth}>
            &lt;
          </button>
          <h2>
            {new Date(year, month).toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h2>

          <button className="calendar-btn" onClick={goToNextMonth}>
            &gt;
          </button>
        </div>
        <div className="days" style={{ fontFamily: "Segoe UI" }}>
          <div className="day">Montag</div>
          <div className="day">Dienstag</div>
          <div className="day">Mittwoch</div>
          <div className="day">Donnerstag</div>
          <div className="day">Freitag</div>
        </div>
        <div className="field">
          <div className="dates">
            {previousMonthDays.map((day) => (
              <div className="date previous-month">{day}</div>
            ))}
            {calendarDays.map((day) => (
              <div className="date">
                {day}
                <MealView></MealView>
              </div>
            ))}
            {nextMonthDays.map((day) => (
              <div className="date next-month">{day}</div>
            ))}
          </div>
        </div>

        <div></div>
      </div>
      <AddMeal></AddMeal>
    </Container>
  );
};

export default Calendar;
