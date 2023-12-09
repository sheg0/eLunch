import { useContext } from "react";
import MealInputDropdown from "./MealInputDropdown";
import { MealListContext } from "../../context/MealModalContext";

const MealInputDropdowns = () => {
  const { meal } = useContext(MealListContext);
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
