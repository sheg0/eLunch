import * as React from "react";
import { Container } from "@mui/material";
import { useState } from "react";
import "./MealList.css";
import "../MealModal/MealModal.css";
import MealModal from "../MealModal/MealModal.jsx";
import { useMealsContext } from "../../hooks/useMealsContext";
import TableHeader from "../TableHeader.jsx";
import { useKeycloak } from "@react-keycloak/web";
import MealListTableBody from "./MealListTableBody.jsx";

function MealList({ meals }) {
  const emptyMeal = {
    name: "",
    ingredients: "",
    description: "",
    timeNeeded: 0,
    difficulty: "Mittel",
    isWithAlcohol: false,
    isLactoseFree: false,
    isGlutenFree: false,
    isWithMeat: false,
    isVegan: false,
    isVegetarian: false,
  };
  // States
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [meal, setMeal] = useState(emptyMeal);

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
    handleClickEdit();
    setMeal(meal);
  };

  const openAddMealModal = () => {
    setMeal(emptyMeal);
    setIsAdding(true);
    setIsEditing(true);
  };

  const handleEditMeal = async (meal) => {
    console.log("inside Edit");
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
      dispatch({ type: "CREATE_MEAL", payload: json });
      setIsEditing(false);
    }
  };

  const handleAddMeal = async (meal) => {
    console.log("inside Add");
    const response = await fetch("/api/meals/", {
      method: "POST",
      body: JSON.stringify({
        ...meal,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    console.log(json);
    if (response.ok) {
      dispatch({ type: "EDIT_MEAL", payload: json });
      setIsEditing(false);
      setIsAdding(false);
    }
  };

  return (
    <Container>
      <div className="table-con">
        <table className="table">
          <TableHeader
            headers={[
              "Gericht",
              "Kategorie",
              "Schwierigkeit",
              "Zeitaufwand",
              "Kosten pro Person",
              "",
            ]}
          />
          <MealListTableBody
            meals={meals}
            setIsEditing={setIsEditing}
            handleClickMealEdit={handleClickMealEdit}
            handleClickDelete={handleClickDelete}
          />
        </table>
      </div>
      <button onClick={openAddMealModal}>Add Meal</button>
      <MealModal
        meal={meal}
        setMeal={setMeal}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        submitMeal={isAdding ? handleAddMeal : handleEditMeal}
      ></MealModal>
    </Container>
  );
}

export default MealList;
//className={emptyFields.includes("type") ? "error" : ""}
