import React, { useState } from "react";
import "./CalendarComponent.css";
import { Container } from "@mui/material";
import AddMeal from "../AddMeal/AddMeal";
import { SlArrowDown, SlArrowLeft, SlArrowRight } from "react-icons/sl";
import CustomModal from "../CustomModal";

const Calendar = ({ meals }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isVisible, setVisible] = useState(false);
  const [weekVisible, setWeekVisible] = useState(true);

  const toggleWeek = () => {
    setWeekVisible(!weekVisible);
  };

  const toggleCalendar = () => {
    setVisible(!isVisible);
  };

  const handleButtonClick = () => {
    toggleWeek();
    toggleCalendar();
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
      calendarDays.push(
        <div className="calendar-day" key={day}>
          {day}
        </div>
      );
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

  return (
    <Container>
      <div className="calendar">
        {isVisible && (
          <div>
            <div className="header">
              <button className="calendar-btn" onClick={goToPreviousMonth}>
                {/*&lt;*/}
                <SlArrowLeft />
              </button>
              <h2>
                {new Date(year, month).toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </h2>

              <button className="calendar-btn" onClick={goToNextMonth}>
                {/*&gt;*/}
                <SlArrowRight />
              </button>
            </div>
            <div className="btn-container">
              <button className="todayBtn" onClick={goToCurrentDate}>
                today
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
                  <div className="date" onClick={() => handleDayClick(day)}>
                    {day}
                  </div>
                ))}
                {nextMonthDays.map((day) => (
                  <div className="date next-month">{day}</div>
                ))}
              </div>
            </div>
          </div>
        )}
        {weekVisible && (
          <div>
            <div className="header">
              <button className="calendar-btn" onClick={goToPreviousWeek}>
                <SlArrowLeft />
              </button>
              <h2>
                {new Date(year, month).toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </h2>
              <button className="calendar-btn" onClick={goToNextWeek}>
                <SlArrowRight />
              </button>
            </div>
            <div className="btn-container">
              <button className="todayBtn" onClick={goToCurrentDate}>
                today
              </button>
            </div>

            <div className="days" style={{ fontFamily: "Segoe UI" }}>
              <div className="day">Montag</div>
              <div className="day">Dienstag</div>
              <div className="day">Mittwoch</div>
              <div className="day">Donnerstag</div>
              <div className="day">Freitag</div>
            </div>

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

export default Calendar;
