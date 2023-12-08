const MealImageCheckbox = ({ meal, mealPropertyName, setMeal, src, alt }) => {
  const handleKeyDown = (e) => {
    // Older browsers may return "Spacebar"
    // instead of " " for the Space Bar key
    //-------------------------------------
    if (e.key === " " || e.key === "Spacebar") {
      setMeal({ ...meal, [mealPropertyName]: !meal[mealPropertyName] });
    }
  };
  return (
    <img
      src={src}
      alt={alt}
      id="imgCheckbox"
      className={meal[mealPropertyName] ? "" : "clicked"}
      onClick={() =>
        setMeal({ ...meal, [mealPropertyName]: !meal[mealPropertyName] })
      }
      onKeyDown={(e) => handleKeyDown(e)}
    />
  );
};

export default MealImageCheckbox;
