const MealInputDropdown = ({ stateOptions, value, handleStateChange }) => {
  return (
    <select
      className="mealText"
      value={value}
      onChange={(e) => handleStateChange(e)}
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
