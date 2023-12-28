import { useMealListContext } from "../../../hooks/useMealListContext";
import { Box } from "@mui/system";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const MealInputDropdown = ({ stateOptions, value, mealPropertyName }) => {
  const { meal, setMeal } = useMealListContext();
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={"margin: 16px"} fullWidth>
        <InputLabel id="meal-select-label">Gericht auswählen</InputLabel>
        <Select
          labelId="options-select"
          id="options-select"
          label="Options"
          value={value}
          onChange={(e) =>
            setMeal({ ...meal, [mealPropertyName]: e.target.value })
          }
        >
          {stateOptions.map((option, i) => (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MealInputDropdown;
