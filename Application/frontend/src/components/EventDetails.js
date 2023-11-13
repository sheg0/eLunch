//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const EventDetails = ({ event }) => {
  //STATES
  /*
  const [isEditing, setIsEditing] = useState(false);
  //const [emptyFields, setEmptyFields] = useState([]);
  const [isVegetarian, setIsVegetarian] = useState(meal.isVegetarian);
  const [isVegan, setIsVegan] = useState(meal.isVegan);
  const [hasGluten, setHasGluten] = useState(meal.hasGluten);
  const [type, setType] = useState(meal.type);
  const [name, setName] = useState(meal.name);
  const [checked, setChecked] = useState(false);
  //const [checked, setChecked] = useState(meal.checked);

  //DISPATCH
  const { dispatch } = useMealsContext(); //grab dispatch function

  //HANDLE FUNCTIONS
  const handleClickDelete = async () => {
    const response = await fetch("/api/meals/" + meal._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_MEAL", payload: json });
    }
  };

  const handleClickEdit = () => {
    setIsEditing(!isEditing);
  };
  const handleEditMeal = async () => {
    const response = await fetch("/api/meals/" + meal._id, {
      method: "PATCH",
      body: JSON.stringify({
        ...meal,
        isVegetarian: isVegetarian,
        isVegan: isVegan,
        hasGluten: hasGluten,
        type: type,
        name: name,
        checked: checked,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "EDIT_MEAL", payload: json });
      setIsEditing(false);
    }
  };
  */
  //RETURN
  return (
    <div className="meal-details">
      <h4>{event.date}</h4>
      <p>
        <strong> meal: </strong>
        {event.meal.name}
      </p>
      <p>
        {formatDistanceToNow(new Date(event.createdAt), { addSuffix: true })}
      </p>
    </div>
  );
};

export default EventDetails;
