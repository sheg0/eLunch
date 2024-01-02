import Calendar from "../components/Calendar/CalendarComponent.jsx";
import { CalendarProvider } from "../context/CalendarContext.jsx";

const Cal = (events) => {
  return (
    <CalendarProvider>
      <Calendar events={events}></Calendar>
    </CalendarProvider>
  );
};

export default Cal;
