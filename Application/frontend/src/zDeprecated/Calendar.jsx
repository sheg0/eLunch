import React, { useState } from "react";
import "./Calendar.css";
import { Container } from "@mui/material";
import CustomModal from "./CustomModal";
import Button from "@mui/material/Button";

export default function Calendar({ meals }) {
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

  /////////////////////////////////

  const getDaysInWeek = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  const daysInWeek = getDaysInWeek(year, month);
  const lastDayOfWeek = new Date(year, month, daysInWeek).getDay();

  const goToNextWeek = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getDay() + 1, 1)
    );
  };

  const nextWeekDays = [];
  for (let i = 1; i <= 6 - lastDayOfWeek; i++) {
    nextWeekDays.push(i);
  }

  const currentDate_ = new Date();
  const currentDay_ = currentDate_.getDay();
  const startDate = new Date(
    currentDate_.getFullYear(),
    currentDate_.getMonth(),
    currentDate_.getDate() - currentDay_
  );
  const weekDates = [];
  for (let i = 0; i < 5; i++) {
    const date = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate() + i + 1
    );
    weekDates.push(date);
  }

  /////////////////////////////////
  const [open, setOpen] = useState(false);
  const [day, setDay] = useState("");

  function handleDayClick(day) {
    //setDate(`${weekday} - ${day}.${month}`);
    setDay(day.key);
    //console.log(day.key);
    setOpen(true);
  }

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  //console.log(today);

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
          {/*
          <button onClick={goToNextWeek}>next week</button>
          <button className="week-btn">
            <div className="weekview">
              {nextWeekDays.map((day) => (
                <div className="date">{day}</div>
              ))}

              
              {" "}
              {weekDates.map((date, index) => (
                <div key={index} className="weekDays">
                  {date.getDate()}
                </div>
              ))}{" "}
              

              
            </div>
            &#8744;
          </button>
          */}
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
        {
          <CustomModal
            month={month + 1}
            day={day}
            open={open}
            setOpen={setOpen}
            meals={meals}
          ></CustomModal>
        }
        <div className="field">
          <div className="dates">
            {previousMonthDays.map((day) => (
              <div className="date previous-month">{day}</div>
            ))}

            {calendarDays.map((day) => (
              <div
                onClick={() => handleDayClick(day)}
                className={"date" + (day.key === dd ? " today" : "")}
              >
                {day}
              </div>
            ))}
            {nextMonthDays.map((day) => (
              <div className="date next-month">{day}</div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </Container>
  );

  /*
  const renderCalendar = () => {
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
                <div className="date">{day}</div>
              ))}
              {nextMonthDays.map((day) => (
                <div className="date next-month">{day}</div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    );
  };

  return <div>{renderCalendar()}</div>;

  */
}
