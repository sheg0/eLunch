import { useMealListContext } from "../../../hooks/useMealListContext";
import StyledTextField from "../../Styled_MUI_Components/StyledTextField";
import { TextField } from "@mui/material";
import "../ModalStyle.css";

const style = {
  marginLeft: "5vh",
  marginBottom: "1vh",
  minWidth: "60vh",
};

const MealInputElement = ({
  type,
  placeholderText,
  value,
  mealPropertyName,
  rows,
}) => {
  const { meal, setMeal } = useMealListContext();
  const visibleRows = rows || 1;

  return (
    <TextField
      style={style}
      multiline
      rows={visibleRows}
      variant="outlined"
      type={type}
      placeholder={placeholderText}
      value={value}
      onChange={(e) => setMeal({ ...meal, [mealPropertyName]: e.target.value })}
    ></TextField>
  );
};

export default MealInputElement;