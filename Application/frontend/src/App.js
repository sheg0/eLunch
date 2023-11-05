import { Routes, Route,useNavigate} from 'react-router-dom'
import { useWorkoutsContext } from './hooks/useWorkoutsContext'
import { useEffect } from 'react'
//pages & components
import Home from './pages/Home'
import List from './pages/List'
import Navbar from './components/Navbar'

function App() {
  const navigate = useNavigate();

  const navigateToList = () => {
    // 👇️ navigate to /contacts
    navigate('/List');
  };

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };


////////////////////////////////

const{meals,dispatch}= useWorkoutsContext();

useEffect(() => {
  const fetchWorkout = async () =>{
      const response = await fetch('/api/meals'); //deleted 'http://localhost:4000' because we get that from proxy field in package.json , this will only solve development problems
      const json = await response.json();
      
      //if response is ok we want to update workouts (8) using setWorkouts and store it to json (12)
      if(response.ok){
          //***setWorkouts(json);
          //****
          dispatch({type: 'SET_MEAL', payload:json});
          //****
      }
  }

  fetchWorkout();
}, [dispatch])

////////////////////////////////

  return (
    <div className="App">
      
        <Navbar />
        <div className="pages"> 
          <section>
            <button onClick={navigateHome}>Home</button>
            <button onClick={navigateToList}>List</button>
          </section>
          <Routes>
              <Route
                path = "/"
                element={<Home meals={meals} />}
              />
              <Route 
                path="/List" 
                element={<List meals={meals}/>} />
              
          </Routes>
        </div>
      
    </div>
  );
}

export default App;
