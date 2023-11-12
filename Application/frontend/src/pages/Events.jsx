import EventDetails from "../components/EventDetails";


// components
//codes with *** are deleted after the use of useWorkoutsContext
//codes with **** are deleted after the use of useWorkoutsContext

const Events = ({ events }) => {
  //***const [workouts, setWorkouts] = useState(null);
  //useEffect will fire a function when the component is rendered ( the [] at the en will tell that the function should be called once)

  return (
    <div className="home">
      <div className="meals">
        {events &&
          events.map((event) => <EventDetails key={event._id} event={event} />)}
      </div>
      
    </div>
  );
};

export default Events;