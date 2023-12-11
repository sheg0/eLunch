import MealDetails from "../zDeprecated/MealDetails";
import MealForm from "../zDeprecated/MealForm";

// components
//codes with *** are deleted after the use of useWorkoutsContext
//codes with **** are deleted after the use of useWorkoutsContext

const Home = ({ meals }) => {
  //***const [workouts, setWorkouts] = useState(null);
  //useEffect will fire a function when the component is rendered ( the [] at the en will tell that the function should be called once)

  return (
    <div className="home">
      <div className="meals">
        {meals &&
          meals.map((meal) => <MealDetails key={meal._id} meal={meal} />)}
      </div>
      <MealForm />
    </div>
  );
};

export default Home;
