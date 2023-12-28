import { useMealListContext } from "../../../hooks/useMealListContext";
import StyledTextField from "../../Styled_MUI_Components/StyledTextField";

const MealInputElement = ({
  type,
  placeholderText,
  value,
  mealPropertyName,
}) => {
  const { meal, setMeal } = useMealListContext();
  return (
    <StyledTextField
      variant="outlined"
      type={type}
      placeholder={placeholderText}
      value={value}
      onChange={(e) => setMeal({ ...meal, [mealPropertyName]: e.target.value })}
    ></StyledTextField>
  );
};

export default MealInputElement;
