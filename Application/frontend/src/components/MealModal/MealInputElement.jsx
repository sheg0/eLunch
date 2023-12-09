const MealInputElement = ({
  type,
  placeholderTexts,
  value,
  meal,
  mealPropertyName,
  setMeal,
}) => {
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
