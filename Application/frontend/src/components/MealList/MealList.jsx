import * as React from "react";
import { Container } from "@mui/material";
import { useState } from "react";
import "./MealList.css";
import MealModal from "../MealModal/MealModal.jsx";
import { FaPen } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { useMealsContext } from "../../hooks/useMealsContext";
import AddButton from "../AddButton.jsx";
import InputField from "../InputField.jsx";
import Checkbox from "@mui/material/Checkbox";

import { useKeycloak } from "@react-keycloak/web";
import Meal from "../Meal.jsx";

function MealList({ meals }) {
  // States
  const [isEditing, setIsEditing] = useState(false);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [currentMeal, setCurrentMeal] = useState();
  //keycloak
  const { keycloak } = useKeycloak();

  //DISPATCH
  const { dispatch } = useMealsContext();

  const handleClickDelete = async (meal) => {
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

  const handleClickMealEdit = (meal) => {
    console.log(meal);
    handleClickEdit();
    setCurrentMeal(meal);
  };
  const handleEditMeal = async (meal) => {
    const response = await fetch("/api/meals/" + meal._id, {
      method: "PATCH",
      body: JSON.stringify({
        ...meal,
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

  return (
    <Container>
      <button onClick={keycloak.logout}></button>
      <div className="table-con">
        <table className="table">
          <thead>
            <tr>
              <th>Gericht</th>
              <th>Kategorie</th>
              <th>Schwierigkeit</th>
              <th>Zeitaufwand</th>
              <th>Kosten pro Person</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {meals?.map((meal) => (
              <tr key={meal?._id + 1}>
                <Meal meal={meal} setIsEditing={setIsEditing}></Meal>

                <td>
                  <div className="icon-container">
                    <button
                      onClick={() => handleClickMealEdit(meal)}
                      className="icon-button edit"
                    >
                      <FaPen />
                    </button>

                    <div className="icon-gap"></div>

                    <button
                      onClick={() => handleClickDelete(meal)}
                      className="icon-button delete"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            <MealModal
              meal={currentMeal}
              setIsEditing={setIsEditing}
              isEditing={isEditing}
              submitEditing={handleEditMeal}
            ></MealModal>
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default MealList;
//className={emptyFields.includes("type") ? "error" : ""}
