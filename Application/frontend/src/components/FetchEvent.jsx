
import { useEventsContext } from "../hooks/useEventsContext";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Events from "../pages/Events.jsx"
function FetchEvent() { 
  
    const { events, dispatch } = useEventsContext();
  
    useEffect(() => {
      const fetchWorkout = async () => {
        const response = await fetch("/api/events"); //deleted 'http://localhost:4000' because we get that from proxy field in package.json , this will only solve development problems
        const json = await response.json();
  
        //if response is ok we want to update workouts (8) using setWorkouts and store it to json (12)
        if (response.ok) {
          //***setWorkouts(json);
          //****
          dispatch({ type: "SET_EVENT", payload: json });
          //****
         }
      };
  
       fetchWorkout();
    }, [dispatch]);
  
  
    return (
  
          <Routes>
           
            <Route path="/Events" element={<Events events={events} />} />
          </Routes>
  
    )
  
  
   }
  
    export default FetchEvent;
  