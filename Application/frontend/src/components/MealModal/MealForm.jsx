import MealFormHeader from "./MealFormHeader";
import MealFormBody from "./MealFormBody";

const MealForm = ({ meal, setMeal }) => {
  return (
    <>
      <MealFormHeader />
      <MealFormBody meal={meal} setMeal={setMeal} />
    </>
  );
};

export default MealForm;
