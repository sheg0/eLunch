import * as React from "react";
import { useTable } from "react-table";
import { Container } from "@mui/material";
import { useState } from "react";
import "./MealList.css";
import Modal from "../AddNewMeal/AddNewMeal.jsx";
import { FaPen } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { useMealsContext } from "../../hooks/useMealsContext";
import AddButton from "../AddButton.jsx";
import InputField from "../InputField.jsx";
import Checkbox from "@mui/material/Checkbox";

import { useKeycloak } from "@react-keycloak/web";
function MealList({ meals }) {
  // States
  const [isEditing, setIsEditing] = useState(false);

  //keycloak
  const { keycloak } = useKeycloak();
  //const username = keycloak.tokenParsed.preferred_username;
  //const firstName = keycloak.tokenParsed.given_name;
  //const lastName = keycloak.tokenParsed.family_name;
  console.log(keycloak.tokenParsed.preferred_username);
  //DISPATCH
  const { dispatch } = useMealsContext();
  // Handle Functions
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
                <td>{meal?.name}</td>
                <td>{meal?.isVegetarian}</td>
                <td>{meal?.isVegan}</td>
                <td>{meal?.hasGluten}</td>
                <td>{meal?.type}</td>
                {!isEditing && (
                  <td>
                    {" "}
                    <div className="icon-container">
                      <button
                        onClick={handleClickEdit}
                        className="icon-button edit"
                      >
                        <FaPen />{" "}
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
                )}
                {isEditing && (
                  <td>
                    {" "}
                    <button
                      onClick={() => handleEditMeal(meal)}
                      className="icon-button save"
                    >
                      <FaPen />
                    </button>
                    <button
                      onClick={handleClickEdit}
                      className="icon-button cancel"
                    >
                      <FaPen />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isEditing && (
        <div className="create">
          <h3>Add a New Meal</h3>

          <InputField
            label="Name:"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <div className="checkbox">
            <label>isLactoseFree</label>
            <Checkbox
              onChange={(e) => setisLactoseFree(e.target.value)}
              value={isLactoseFree}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          <div className="checkbox">
            <label>isGlutenFree</label>
            <Checkbox
              onChange={(e) => setisGlutenFree(e.target.value)}
              value={isGlutenFree}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          <div className="checkbox">
            <label>isWithAlcohol</label>
            <Checkbox
              onChange={(e) => setisWithAlcohol(e.target.value)}
              value={isWithAlcohol}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          <div className="checkbox">
            <label>isWithMeat</label>
            <Checkbox
              onChange={(e) => setIsWithMeat(e.target.value)}
              value={isWithMeat}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>

          <div className="checkbox">
            <label>IsVegetarian</label>
            <Checkbox
              onChange={(e) => setIsVegetarian(e.target.value)}
              value={isVegetarian}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>

          <div className="checkbox">
            <label>isVegan</label>
            <Checkbox
              onChange={(e) => setIsVegan(e.target.value)}
              value={isVegan}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>

          <InputField
            label="type:"
            type="text"
            onChange={(e) => setType(e.target.value)}
            value={type}
          />

          <AddButton variant="contained">Add Meal</AddButton>
        </div>
      )}
      <Modal></Modal>
    </Container>
  );
}

export default MealList;
//className={emptyFields.includes("type") ? "error" : ""}
