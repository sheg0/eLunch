
import { useMealsContext } from "../hooks/useMealsContext";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//pages
import Home from "../pages/Home";
import List from "../pages/List";
import Calendar from "../pages/Calendar";



function FetchMeal() { 
  
  const { meals, dispatch } = useMealsContext();

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch("/api/meals"); //deleted 'http://localhost:4000' because we get that from proxy field in package.json , this will only solve development problems
      const json = await response.json();

      //if response is ok we want to update workouts (8) using setWorkouts and store it to json (12)
      if (response.ok) {
        //***setWorkouts(json);
        //****
        dispatch({ type: "SET_MEAL", payload: json });
        //****
       }
    };

     fetchWorkout();
  }, [dispatch]);


  return (

        <Routes>
          <Route path="/" element={<Home meals={meals} />} />
          <Route path="/List" element={<List meals={meals} />} />
          <Route path="/Calendar" element={<Calendar />} />
        </Routes>

  )


 }

  export default FetchMeal;
