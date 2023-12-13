import Calendar from "../components/Calendar/CalendarComponent.jsx";
import { CalendarProvider } from "../context/CalendarContext.jsx";

const Cal = () => {
  return (
    <CalendarProvider>
      <Calendar></Calendar>
    </CalendarProvider>
  );
};

export default Cal;
