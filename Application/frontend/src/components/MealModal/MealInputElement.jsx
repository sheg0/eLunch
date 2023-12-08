const MealInputElement = ({
  type,
  placeholderTexts,
  value,
  handleInputChange,
}) => {
  return (
    <div>
      <input
        className="mealText"
        type={type}
        placeholder={placeholderTexts}
        value={value}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
};

export default MealInputElement;
