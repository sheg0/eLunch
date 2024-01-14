import MealInputElement from "./MealInputElement";
import { useMealListContext } from "../../../hooks/useMealListContext";
import "../ModalStyle.css";

const MealInputElements = () => {
  const { meal } = useMealListContext();
  return (
    <>
      <div className="MealInput-Name">
        <p>Gerichtname</p>
        <MealInputElement
          type={"text"}
          placeholderText={"Gerichtenamen eintragen..."}
          value={meal.name}
          mealPropertyName={"name"}
          rows={1}
        />
      </div>
      <div className="MealInput-Name">
        <p>Zutaten</p>
        <MealInputElement
          type={"text"}
          placeholderText={"Zutaten eintragen..."}
          value={meal.ingredients}
          mealPropertyName={"ingredients"}
          rows={3.5}
        />
      </div>
      <div className="MealInput-Name">
        <p>Beschreibung</p>

        <MealInputElement
          type={"text"}
          placeholderText={"Beschreibung eintragen..."}
          value={meal.description}
          mealPropertyName={"description"}
          rows={3.5}
        />
      </div>

      <div className="MealInput-Name">
        <p>Zeitaufwand</p>

        <MealInputElement
          type={"number"}
          placeholderText={"Zeitaufwand eintragen..."}
          value={meal.timeNeeded}
          mealPropertyName={"timeNeeded"}
          rows={1}
        />
      </div>
      <div className="MealInput-Name">
        <p>Kosten</p>
        <MealInputElement
          type={"number"}
          placeholderText={"Kosten eintragen..."}
          value={meal.cost}
          mealPropertyName={"cost"}
          rows={1}
        />
      </div>
    </>
  );
};

export default MealInputElements;
