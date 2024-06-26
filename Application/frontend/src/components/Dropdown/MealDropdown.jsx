import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useMealsContext } from "../../hooks/useMealsContext";
import { useState, useEffect } from "react";
import ErrorHandler from "../ErrorHandler";

export default function MealDropdown({ setMealId, setMealBack }) {
  const { meals } = useMealsContext();
  const [meal, setMeal] = useState(meals[0]);
  setMealBack(meal);
  const handleChange = (event) => {
    setMeal(event.target.value);
  };

  useEffect(() => {
    setMealId(meal._id);
  }, [meal]);

  return (
    <Box sx={{ maxWidth: "45vh" }}>
      <FormControl fullWidth>
        <InputLabel id="meal-select-label"></InputLabel>
        <Select
          labelId="meal-select-label"
          id="meal-select"
          value={meal}
          onChange={handleChange}
        >
          {meals.map((meal) => (
            <MenuItem key={meal.id} value={meal}>
              {meal.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
