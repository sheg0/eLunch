const MealImageCheckbox = ({ meal, mealAttribute, setMeal, src, alt }) => {
  const handleKeyDown = (e) => {
    // Older browsers may return "Spacebar"
    // instead of " " for the Space Bar key
    //-------------------------------------
    if (e.key === " " || e.key === "Spacebar") {
      setMeal({ ...meal, isWithAlcohol: !meal.isWithAlcohol });
    }
  };
  return (
    <img
      src={src}
      alt={alt}
      id="imgCheckbox"
      className={meal.isWithAlcohol ? "" : "clicked"}
      onClick={() => setMeal({ ...meal, isWithAlcohol: !meal.isWithAlcohol })}
      onKeyDown={(e) => handleKeyDown(e)}
    />
  );
};

export default MealImageCheckbox;
