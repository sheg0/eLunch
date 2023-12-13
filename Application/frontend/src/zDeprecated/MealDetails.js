import { useMealsContext } from "../hooks/useMealsContext";
import { useState } from "react";
//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Checkbox from "@mui/material/Checkbox";
import { useKeycloak } from "@react-keycloak/web";
const MealDetails = ({ meal }) => {
  //STATES
  const [isEditing, setIsEditing] = useState(false);
  //const [emptyFields, setEmptyFields] = useState([]);
  const [isVegetarian, setIsVegetarian] = useState(meal.isVegetarian);
  const [isVegan, setIsVegan] = useState(meal.isVegan);
  const [isWithMeat, setIsWithMeat] = useState(meal.isWithMeat);
  const [isWithAlcohol, setisWithAlcohol] = useState(meal.isWithAlcohol);
  const [isGlutenFree, setisGlutenFree] = useState(meal.isGlutenFree);
  const [isLactoseFree, setisLactoseFree] = useState(meal.isLactoseFree);
  const [type, setType] = useState(meal.type);
  const [name, setName] = useState(meal.name);
  const [checked, setChecked] = useState(false);
  //const [checked, setChecked] = useState(meal.checked);
  const { keycloak } = useKeycloak();
  //DISPATCH
  const { dispatch } = useMealsContext(); //grab dispatch function

  //HANDLE FUNCTIONS
  const handleClickDelete = async () => {
    console.log(meal._id);
    const response = await fetch("/api/meals/" + meal._id, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${keycloak.token}` },
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
        isWithMeat: isWithMeat,
        isWithAlcohol: isWithAlcohol,
        isGlutenFree: isGlutenFree,
        isLactoseFree: isLactoseFree,
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
  //RETURN
  return (
    <div className="meal-details">
      {!isEditing && (
        <div>
          <h4>{meal.name}</h4>
          <p>
            <strong> isVegetarian: </strong>
            {meal.isVegetarian}
          </p>
          <p>
            <strong> isVegan: </strong>
            {meal.isVegan}
          </p>
          <p>
            <strong> hasGluten: </strong>
            {meal.isGlutenFree}
          </p>
          <p>
            <strong> type: </strong>
            {meal.type}
          </p>
          <p>
            <strong> checked: </strong>
            {String(meal.checked)}
          </p>

          <p>
            {formatDistanceToNow(new Date(meal.createdAt), { addSuffix: true })}
          </p>
        </div>
      )}
      {isEditing && (
        <div>
          <label>Name:</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label>IsVegetarian:</label>
          <input
            type="text"
            onChange={(e) => setIsVegetarian(e.target.value)}
            value={isVegetarian}
          />
          <label>isVegan:</label>
          <input
            type="text"
            onChange={(e) => setIsVegan(e.target.value)}
            value={isVegan}
          />
          <label>hasGluten:</label>
          <input
            type="text"
            onChange={(e) => setisGlutenFree(e.target.value)}
            value={isGlutenFree}
          />
          <label>type:</label>

          <input
            type="text"
            onChange={(e) => setType(e.target.value)}
            value={type}
          />
          <Checkbox
            onChange={(e) => setChecked(e.target.isVegan)}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Checkbox
            onChange={(e) => setChecked(e.target.hasGluten)}
            inputProps={{ "aria-label": "controlled" }}
          />

          <Checkbox
            onChange={(e) => setChecked(e.target.checked)}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
      )}
      <div className="box">
        {!isEditing && (
          <button
            className="material-symbols-outlined-edit"
            onClick={handleClickEdit}
          >
            edit
          </button>
        )}
        {isEditing && (
          <button
            className="material-symbols-outlined-edit"
            onClick={handleEditMeal}
          >
            save
          </button>
        )}
        {isEditing && (
          <button
            className="material-symbols-outlined-edit"
            onClick={handleClickEdit}
          >
            cancel
          </button>
        )}
        {isEditing && (
          <button
            className="material-symbols-outlined-delete"
            onClick={handleClickDelete}
          >
            delete
          </button>
        )}
      </div>
    </div>
  );
};

export default MealDetails;
