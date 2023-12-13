import { useState } from "react";
import { useMealsContext } from "../hooks/useMealsContext";
import AddButton from "./AddButton";
import InputField from "../components/InputField";

import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { useKeycloak } from "@react-keycloak/web";
const MealForm = () => {
  //****
  const { dispatch } = useMealsContext();
  //****
  const [name, setName] = useState("");
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [hasGluten, setHasGluten] = useState(false);
  const [type, setType] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [checked, setChecked] = useState(false);
  const [isWithMeat, setIsWithMeat] = useState(false);
  const [isWithAlcohol, setisWithAlcohol] = useState(false);
  const [isGlutenFree, setisGlutenFree] = useState(false);
  const [isLactoseFree, setisLactoseFree] = useState(false);
  const { keycloak } = useKeycloak();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const meal = { name, isVegetarian, isVegan, hasGluten, type, checked };

    const response = await fetch("/api/meals", {
      method: "POST",
      body: JSON.stringify(meal),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${keycloak.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);

      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setName("");
      setIsVegetarian(false);
      setIsVegan(false);
      setHasGluten(false);
      setType("");
      setChecked(false);
      setIsWithMeat(false);
      setisWithAlcohol(false);
      setisGlutenFree(false);
      setisLactoseFree(false);
      setError(null);
      setEmptyFields([]);

      console.log("New Meal Added", json);

      dispatch({ type: "CREATE_MEAL", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Meal</h3>

      <InputField
        label="Name:"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        className={emptyFields.includes("name") ? "error" : ""}
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
      <div className="checkbox">
        <label>hasGluten</label>
        <Checkbox
          onChange={(e) => setHasGluten(e.target.value)}
          value={hasGluten}
          inputProps={{ "aria-label": "controlled" }}
          //className={emptyFields.includes("hasGluten") ? "error" : ""}
        />
      </div>

      <InputField
        label="type:"
        type="text"
        onChange={(e) => setType(e.target.value)}
        value={type}
        className={emptyFields.includes("type") ? "error" : ""}
      />

      <AddButton variant="contained">Add Meal</AddButton>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default MealForm;
