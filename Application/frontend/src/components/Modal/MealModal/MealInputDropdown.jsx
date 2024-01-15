import { useMealListContext } from "../../../hooks/useMealListContext";
import { Box } from "@mui/system";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const style = {
  minWidth: "50vh",
};

const MealInputDropdown = ({ stateOptions, value, mealPropertyName }) => {
  const { meal, setMeal } = useMealListContext();
  return (
    <Box sx={{ minWidth: "30vh", maxWidth: "40vh" }}>
      <FormControl fullWidth>
        <Select
          style={style}
          labelId="options-select"
          id="options-select"
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
