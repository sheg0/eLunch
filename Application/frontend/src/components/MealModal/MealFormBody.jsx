import MealInputElements from "./MealInputElements";
import MealInputDropdowns from "./MealInputDropdowns";
import MealImageCheckboxes from "./MealImageCheckboxes";

const MealFormBody = ({ meal, setMeal }) => {
  console.log(meal);
  return (
    <div className="inputField">
      <MealInputElements meal={meal} setMeal={setMeal} />
      <MealInputDropdowns meal={meal} setMeal={setMeal} />
      <MealImageCheckboxes meal={meal} setMeal={setMeal} />
      <div className="btnPos">
        <button
          className="btnMeal btn-newMeal"
          /*onClick={() => submitEditing({})}*/
        >
          Bestätigen
        </button>
      </div>
    </div>
  );
};

export default MealFormBody;
