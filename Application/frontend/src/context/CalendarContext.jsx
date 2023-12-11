import { createContext, useState } from "react";

export const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isMonthVisible, setMonthVisible] = useState(false);

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
  };

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};
