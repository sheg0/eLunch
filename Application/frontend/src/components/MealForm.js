import { useState } from "react";
import { useMealsContext } from "../hooks/useMealsContext";
import AddButton from "./AddButton";
import InputField from "./InputField";

import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const MealForm = () => {
  //****
  const { dispatch } = useMealsContext();
  //****
  const [name, setName] = useState("");
  const [isVegetarian, setIsVegetarian] = useState("");
  const [isVegan, setIsVegan] = useState("");
  const [hasGluten, setHasGluten] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [checked, setChecked] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const meal = { name, isVegetarian, isVegan, hasGluten, type, checked };

    const response = await fetch("/api/meals", {
      method: "POST",
      body: JSON.stringify(meal),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);

      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setName("");
      setIsVegetarian("");
      setIsVegan("");
      setHasGluten("");
      setType("");
      setChecked("");
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

      <InputField
        label="IsVegetarian:"
        type="text"
        onChange={(e) => setIsVegetarian(e.target.value)}
        value={isVegetarian}
        className={emptyFields.includes("isVegetarian") ? "error" : ""}
      />

      <InputField
        label="isVegan:"
        type="text"
        onChange={(e) => setIsVegan(e.target.value)}
        value={isVegan}
        className={emptyFields.includes("isVegan") ? "error" : ""}
      />

      <InputField
        label="hasGluten:"
        type="text"
        onChange={(e) => setHasGluten(e.target.value)}
        value={hasGluten}
        className={emptyFields.includes("hasGluten") ? "error" : ""}
      />

      <InputField
        label="type:"
        type="text"
        onChange={(e) => setType(e.target.value)}
        value={type}
        className={emptyFields.includes("type") ? "error" : ""}
      />

      <Checkbox
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{ "aria-label": "controlled" }}
      />

      <AddButton variant="contained">Add Meal</AddButton>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default MealForm;
