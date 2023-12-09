import MealInputDropdown from "./MealInputDropdown";

const MealInputDropdowns = ({ meal, setMeal }) => {
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
        meal={meal}
        mealPropertyName={"category"}
        setMeal={setMeal}
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
        meal={meal}
        mealPropertyName={"difficulty"}
        setMeal={setMeal}
      />
    </>
  );
};

export default MealInputDropdowns;
