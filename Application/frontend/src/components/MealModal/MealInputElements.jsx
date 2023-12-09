import MealInputElement from "./MealInputElement";

const MealInputElements = ({ meal, setMeal }) => {
  return (
    <>
      <MealInputElement
        type={"text"}
        placeholderTexts={"Gerichtenamen eintragen..."}
        value={meal.name}
        meal={meal}
        mealPropertyName={"name"}
        setMeal={setMeal}
      />
      <MealInputElement
        type={"text"}
        placeholderTexts={"Zutaten eintragen..."}
        value={meal.ingredients}
        meal={meal}
        mealPropertyName={"ingredients"}
        setMeal={setMeal}
      />
      <MealInputElement
        type={"text"}
        placeholderTexts={"Beschreibung eintragen..."}
        value={meal.description}
        meal={meal}
        mealPropertyName={"description"}
        setMeal={setMeal}
      />
      <MealInputElement
        type={"number"}
        placeholderTexts={"Zeitaufwand eintragen..."}
        value={meal.timeNeeded}
        meal={meal}
        mealPropertyName={"timeNeeded"}
        setMeal={setMeal}
      />
      <MealInputElement
        type={"number"}
        placeholderTexts={"Kosten eintragen..."}
        value={meal.cost}
        meal={meal}
        mealPropertyName={"cost"}
        setMeal={setMeal}
      />
    </>
  );
};

export default MealInputElements;
