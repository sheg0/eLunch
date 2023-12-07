import React from "react";
import { useState } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { useMealsContext } from "../hooks/useMealsContext";
import { FaPen } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const Meal = ({ meal, ...props }) => {
  const { dispatch } = useMealsContext();
  const { keycloak } = useKeycloak();

  const handleClickDelete = async () => {
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

  const handleEditMeal = async (meal) => {
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
    <tr key={meal?._id + 1}>
      <td>{meal?.name}</td>
      <td>{meal?.isVegetarian}</td>
      <td>{meal?.isVegan}</td>
      <td>{meal?.hasGluten}</td>
      <td>{meal?.type}</td>
      {!isEditing && (
        <td>
          {" "}
          <div className="icon-container">
            <button onClick={handleClickEdit} className="icon-button edit">
              <FaPen />{" "}
            </button>

            <div className="icon-gap"></div>

            <button onClick={handleClickDelete} className="icon-button delete">
              <FaRegTrashAlt />
            </button>
          </div>
        </td>
      )}
      {isEditing && (
        <td>
          {" "}
          <button onClick={handleEditMeal} className="icon-button save">
            <FaPen />
          </button>
          <button onClick={handleClickEdit} className="icon-button cancel">
            <FaPen />
          </button>
        </td>
      )}
    </tr>
  );
};

export default Meal;
