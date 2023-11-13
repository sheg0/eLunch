import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Dropdown from "../components/Dropdown";
const Calendar = ({meals}) => {
    const [currentEvents, setCurrentEvents] = useState([]);
    const [myvalue,setSelected] = useState("Choose one")
    const [isActive,setIsActive] = useState(false);
    const handleDateClick = (selected) => {
        setIsActive(true)
        const title = myvalue;
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();
        
        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            });
        }
        
       
    };

    const handleEventClick =  (selected) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
            selected.event.remove();
        }
    };

    return (
    <div>
        
        <Box m="20px">
       
       <Box display="flex" justifyContent="space-between">
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
           </Box>
           <Box
               flex="1 1 100%"
               ml="15px"
           >
               <FullCalendar 
                   height="75vh"
                   plugins={[
                       dayGridPlugin,
                       timeGridPlugin,
                       interactionPlugin,
                       listPlugin
                   ]}
                   headerToolbar={{
                       left: "prev,next today",
                       center: "title",
                       right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                   }}
                   initialView="dayGridMonth"
                   editable={true}
                   selectable={true}
                   selectMirror={true}
                   dayMaxEvents={true}
                   select={handleDateClick}
                   eventClick={handleEventClick}
                   eventsSet={(events) =>setCurrentEvents(events)}
                   initialEvents={[
                       { id: "1234", title: "All-day event", date: "2023-11-10" },
                       { id: "4321", title: "Timed event", date: "2023-11-25" },
                   ]}
               />
           </Box>
       </Box>
   </Box>
   {isActive &&   <Dropdown setActivatedFromAbove={setIsActive} selected={myvalue} setSelected={setSelected}  meals={meals}></Dropdown>}
    </div>
    
    )
};

export default Calendar;