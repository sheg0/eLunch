import MealInputDropdown from "./MealInputDropdown";
import { useMealListContext } from "../../../hooks/useMealListContext";

const MealInputDropdowns = () => {
  const { meal } = useMealListContext();
  return (
    <>
      <MealInputDropdown
        stateOptions={[
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
      <MealInputDropdown
        stateOptions={[
          "Sehr Einfach",
          "Einfach",
          "Mittel",
          "Schwierig",
          "Chefkoch",
        ]}
        value={meal.difficulty}
        mealPropertyName={"difficulty"}
      />
    </>
  );
};

export default MealInputDropdowns;
