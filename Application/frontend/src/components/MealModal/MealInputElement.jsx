import { useContext } from "react";
import { MealListContext } from "../../context/MealModalContext";

const MealInputElement = ({
  type,
  placeholderTexts,
  value,
  mealPropertyName,
}) => {
  const { meal, setMeal } = useContext(MealListContext);
  return (
    <div>
      <input
        className="mealText"
        type={type}
        placeholder={placeholderTexts}
        value={value}
        onChange={(e) =>
          setMeal({ ...meal, [mealPropertyName]: e.target.value })
        }
      />
    </div>
  );
};

export default MealInputElement;
