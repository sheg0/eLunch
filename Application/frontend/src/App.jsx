import { Routes, Route } from "react-router-dom";
import { useMealsContext } from "./hooks/useMealsContext";
import { useEffect } from "react";
//pages & components
import Home from "./pages/Home";
import List from "./pages/List";

import Calendar from "./pages/Calendar";
import Navbar from "./components/Navbar";

import NavigationSection from "./components/NavigationSection";

function App() {
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

  ////////////////////////////////
  return (
    <div className="App">
      <Navbar />
      <div className="pages">
        <NavigationSection></NavigationSection>
        <Routes>
          <Route path="/" element={<Home meals={meals} />} />
          <Route path="/List" element={<List meals={meals} />} />
          <Route path="/Calendar" element={<Calendar meals={meals} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
