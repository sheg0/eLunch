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
import Meal from "../Meal.jsx";

function MealList({ meals }) {
  // States
  const [isEditing, setIsEditing] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState("");
  const [isVegan, setIsVegan] = useState("");
  const [isWithMeat, setIsWithMeat] = useState("");
  const [isWithAlcohol, setisWithAlcohol] = useState("");
  const [isGlutenFree, setisGlutenFree] = useState("");
  const [isLactoseFree, setisLactoseFree] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  //keycloak
  const { keycloak } = useKeycloak();
  //const username = keycloak.tokenParsed.preferred_username;
  //const firstName = keycloak.tokenParsed.given_name;
  //const lastName = keycloak.tokenParsed.family_name;
  console.log(keycloak.tokenParsed.preferred_username);
  //DISPATCH
  const { dispatch } = useMealsContext();

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
              <Meal meal={meal} setIsEditing={setIsEditing}></Meal>
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
