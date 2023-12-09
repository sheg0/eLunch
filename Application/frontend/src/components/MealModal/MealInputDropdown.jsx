const MealInputDropdown = ({
  stateOptions,
  value,
  meal,
  mealPropertyName,
  setMeal,
}) => {
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
