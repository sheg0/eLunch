import { useContext } from "react";
import { MealListContext } from "../../context/MealModalContext";

const MealInputDropdown = ({ stateOptions, value, mealPropertyName }) => {
  const { meal, setMeal } = useContext(MealListContext);
  return (
    <select
      className="mealText"
      value={value}
      onChange={(e) => setMeal({ ...meal, [mealPropertyName]: e.target.value })}
    >
      {stateOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default MealInputDropdown;
