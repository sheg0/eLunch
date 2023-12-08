import MealInputElement from "./MealInputElement";

const MealInputElements = ({ meal, setMeal }) => {
  return (
    <>
      <MealInputElement
        type={"text"}
        placeholderTexts={"Gerichtenamen eintragen..."}
        value={meal.name}
        handleInputChange={(e) => setMeal({ ...meal, name: e.target.value })}
      />
      <MealInputElement
        type={"text"}
        placeholderTexts={"Zutaten eintragen..."}
        value={meal.ingredients}
        handleInputChange={(e) =>
          setMeal({ ...meal, ingredients: e.target.value })
        }
      />
      <MealInputElement
        type={"text"}
        placeholderTexts={"Beschreibung eintragen..."}
        value={meal.description}
        handleInputChange={(e) =>
          setMeal({ ...meal, description: e.target.value })
        }
      />
      <MealInputElement
        type={"number"}
        placeholderTexts={"Zeitaufwand eintragen..."}
        value={meal.timeNeeded}
        handleInputChange={(e) =>
          setMeal({ ...meal, timeNeeded: e.target.value })
        }
      />
      <MealInputElement
        type={"number"}
        placeholderTexts={"Kosten eintragen..."}
        value={meal.cost}
        handleInputChange={(e) => setMeal({ ...meal, cost: e.target.value })}
      />
    </>
  );
};

export default MealInputElements;
