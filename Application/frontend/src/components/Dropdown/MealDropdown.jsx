import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useMealsContext } from "../../hooks/useMealsContext";
import { useState, useEffect } from "react";

export default function MealDropdown({ setMealId }) {
  const { meals } = useMealsContext();
  const [meal, setMeal] = useState(meals[0]);
  const handleChange = (event) => {
    setMeal(event.target.value);
  };

  useEffect(() => {
    setMealId(meal._id);
  }, [meal]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={"margin: 16px"} fullWidth>
        <InputLabel id="meal-select-label">Gericht auswählen</InputLabel>
        <Select
          labelId="meal-select-label"
          id="meal-select"
          label="Meals"
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
