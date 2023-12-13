import MealInputElements from "./MealInputElements";
import MealInputDropdowns from "./MealInputDropdowns";
import MealImageCheckboxes from "./MealImageCheckboxes";
import { useMealListContext } from "../../hooks/useMealListContext";

const MealFormBody = () => {
  const { meal, submitMeal } = useMealListContext();

  return (
    <div className="inputField">
      <MealInputElements />
      <MealInputDropdowns />
      <MealImageCheckboxes />
      <div className="btnPos">
        <button
          className="btnMeal btn-newMeal"
          onClick={() => submitMeal(meal)}
        >
          Bestätigen
        </button>
      </div>
    </div>
  );
};

export default MealFormBody;
