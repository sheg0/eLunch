import { useMealListContext } from "../../hooks/useMealListContext";

const MealInputElement = ({
  type,
  placeholderTexts,
  value,
  mealPropertyName,
}) => {
  const { meal, setMeal } = useMealListContext();
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
