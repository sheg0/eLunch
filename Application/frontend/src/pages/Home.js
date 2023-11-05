import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";



// components
//codes with *** are deleted after the use of useWorkoutsContext
//codes with **** are deleted after the use of useWorkoutsContext

const Home = ({meals}) => {

   
    //****
   
    //****
    //***const [workouts, setWorkouts] = useState(null);
    //useEffect will fire a function when the component is rendered ( the [] at the en will tell that the function should be called once)
    
    return (
        <div className="home">
            <div className="meals">
                {meals && meals.map((meal)=> (
                    <WorkoutDetails key={meal._id} meal= {meal}/>
                ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home