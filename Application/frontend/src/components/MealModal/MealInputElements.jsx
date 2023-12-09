import { useContext } from "react";
import { MealListContext } from "../../context/MealModalContext";
import MealInputElement from "./MealInputElement";

const MealInputElements = () => {
  const { meal } = useContext(MealListContext);
  return (
    <>
      <MealInputElement
        type={"text"}
        placeholderTexts={"Gerichtenamen eintragen..."}
        value={meal.name}
        mealPropertyName={"name"}
      />
      <MealInputElement
        type={"text"}
        placeholderTexts={"Zutaten eintragen..."}
        value={meal.ingredients}
        mealPropertyName={"ingredients"}
      />
      <MealInputElement
        type={"text"}
        placeholderTexts={"Beschreibung eintragen..."}
        value={meal.description}
        mealPropertyName={"description"}
      />
      <MealInputElement
        type={"number"}
        placeholderTexts={"Zeitaufwand eintragen..."}
        value={meal.timeNeeded}
        mealPropertyName={"timeNeeded"}
      />
      <MealInputElement
        type={"number"}
        placeholderTexts={"Kosten eintragen..."}
        value={meal.cost}
        mealPropertyName={"cost"}
      />
    </>
  );
};

export default MealInputElements;
