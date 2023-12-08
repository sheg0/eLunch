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
        handleStateChange={(e) => setMeal({ ...meal, cost: e.target.value })}
      />
      <MealInputDropdown
        stateOptions={[
          "Sehr Einfach",
          "Einfach",
          "Beilage",
          "Nachtisch",
          "Snack",
          "Extern",
          "Besonderheit",
          "Rezept",
          "Aktivität",
        ]}
        value={meal.difficulty}
        handleStateChange={(e) =>
          setMeal({ meal: { ...meal, difficulty: e.target.value } })
        }
      />
    </>
  );
};

export default MealInputDropdowns;
