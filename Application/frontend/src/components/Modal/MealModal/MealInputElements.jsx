import MealInputElement from "./MealInputElement";
import { useMealListContext } from "../../../hooks/useMealListContext";
import "../ModalStyle.css";
const MealInputElements = () => {
  const { meal } = useMealListContext();
  return (
    <>
      <MealInputElement
        type={"text"}
        placeholderText={"Gerichtenamen eintragen..."}
        value={meal.name}
        mealPropertyName={"name"}
      />
      <MealInputElement
        type={"text"}
        placeholderText={"Zutaten eintragen..."}
        value={meal.ingredients}
        mealPropertyName={"ingredients"}
      />
      <MealInputElement
        type={"text"}
        placeholderText={"Beschreibung eintragen..."}
        value={meal.description}
        mealPropertyName={"description"}
      />
      <MealInputElement
        type={"number"}
        placeholderText={"Zeitaufwand eintragen..."}
        value={meal.timeNeeded}
        mealPropertyName={"timeNeeded"}
      />
      <MealInputElement
        type={"number"}
        placeholderText={"Kosten eintragen..."}
        value={meal.cost}
        mealPropertyName={"cost"}
      />
    </>
  );
};

export default MealInputElements;
