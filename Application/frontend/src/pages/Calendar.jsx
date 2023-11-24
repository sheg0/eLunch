import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { SlArrowDown } from "react-icons/sl";
import "../styles/Calendar.css";

import { MdKeyboardArrowDown } from "react-icons/md";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Dropdown from "../components/Dropdown/Dropdown";
import CustomModal from "../components/CustomModal";

const Calendar = ({ meals }) => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [myvalue, setSelected] = useState("Choose one");
  const [isActive, setIsActive] = useState(false);

  const handleDateClick = (selected) => {
    setIsActive(true);

    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    const title = myvalue;

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  const calendarRef = useRef(null);

  useEffect(() => {
    const calendarApi = calendarRef.current.getApi();

    calendarApi.setOption("initialView", "timeGridWeek");
    calendarApi.setOption("slotMinTime", "00:00:00");
    calendarApi.setOption("slotMaxTime", "00:00:00");
    calendarApi.setOption("weekNumbers", true);
  }, []);

  return (
    <div>
      <Box m="10px">
        <Box display="flex" justifyContent="space-between">
          {/*
           <Box 
               flex="1 1 20%" 
               backgroundColor="#acacac"
               color="#043c5f"
               p="15px"
               borderRadius="4px"
           >
               <Typography variant="h5">Events</Typography>
               <List>
                   {currentEvents.map((event) => (
                       <ListItem
                           key={event.id}
                           sx={{ 
                               backgroundColor: "#717d89",
                               color: "white",
                               margin: "10px 0",
                               borderRadius: "2px",
                           }}
                       >
                           <ListItemText
                               primary={event.title}
                               secondary={
                                   <Typography>
                                       {formatDate(event.start, {
                                           year: "numeric",
                                           month: "short",
                                           day: "numeric"
                                       })}
                                   </Typography>
                               }
                           />
                       </ListItem>
                   )
                   )}
               </List>
                              </Box>   */}
          <Box flex="1 1 100%" ml="15px">
            <FullCalendar
              ref={calendarRef}
              height="75vh"
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth", //// timeGridWeek,timeGridDay,listMonth ////,
              }}
              footerToolbar={{
                week: "w",
                center: "timeGridWeek",
              }}
              weekends={false}
              weekNumbers={true}
              weekText="KW"
              fixedWeekCount={false}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={(events) => setCurrentEvents(events)}
              initialEvents={[
                {
                  id: "1234",
                  title: "Burger",
                  date: "2023-11-08",
                  backgroundColor: "#F1F1F1",
                  borderColor: "#F1F1F1",
                  textColor: "#043C5F",
                },
                {
                  id: "4321",
                  title: "Buddah Gemüse",
                  date: "2023-11-24",
                  backgroundColor: "#CCEBFE",
                  borderColor: "#CCEBFE",
                  textColor: "#043C5F",
                },
                {
                  id: "5678",
                  title: "Schupfnudeln",
                  date: "2023-11-20",
                  backgroundColor: "#FFCCCC",
                  borderColor: "#FFCCCC",
                  textColor: "#043C5F",
                },
              ]}
            />
          </Box>
        </Box>
      </Box>
      <Container>
        <CustomModal></CustomModal>
      </Container>

      {isActive && (
        <Dropdown
          setActivatedFromAbove={setIsActive}
          selected={myvalue}
          setSelected={setSelected}
          meals={meals}
        ></Dropdown>
      )}
    </div>
  );
};

export default Calendar;
