import React from "react";
import { useMealsContext } from "../../hooks/useMealsContext";
const MealsDropdown = ({ setMealId }) => {
  const { meals } = useMealsContext();

  const renderOptions = () => {
    return meals.map((meal) => (
      <option key={meal._id} value={meal._id}>
        {meal.name}
      </option>
    ));
  };

  return (
    <div>
      <select onChange={(e) => setMealId(e.target.value)} id="mealDropdown">
        {renderOptions()}
      </select>
    </div>
  );
};

export default MealsDropdown;
