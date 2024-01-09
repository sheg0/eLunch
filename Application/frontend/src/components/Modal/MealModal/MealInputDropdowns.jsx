import MealInputDropdown from "./MealInputDropdown";
import { useMealListContext } from "../../../hooks/useMealListContext";
import "../ModalStyle.css";

const MealInputDropdowns = () => {
  const { meal } = useMealListContext();
  return (
    <>
      <div className="EventModal-Container">
        <p className="MealInput-Text">Kategorie</p>
        <MealInputDropdown
          stateOptions={[
            "Unbestimmt",
            "Vorspeise",
            "Hauptgericht",
            "Beilage",
            "Nachtisch",
            "Snack",
            "Extern",
            "Besonderheit",
            "Rezept",
            "Aktivität",
          ]}
          value={meal.category}
          mealPropertyName={"category"}
        />
      </div>

      <div className="EventModal-Container">
        <p className="MealInput-Text">Schwierigkeit</p>
        <MealInputDropdown
          stateOptions={[
            "Unbestimmt",
            "Sehr Einfach",
            "Einfach",
            "Mittel",
            "Schwierig",
            "Chefkoch",
          ]}
          value={meal.difficulty}
          mealPropertyName={"difficulty"}
        />
      </div>
    </>
  );
};

export default MealInputDropdowns;