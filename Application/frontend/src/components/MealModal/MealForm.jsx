import MealFormHeader from "./MealFormHeader";
import MealFormBody from "./MealFormBody";

const MealForm = ({ meal, setMeal, isEditing, setIsEditing, submitMeal }) => {
  console.log(setIsEditing);
  return (
    <>
      <MealFormHeader isEditing={isEditing} setIsEditing={setIsEditing} />
      <MealFormBody meal={meal} setMeal={setMeal} submitMeal={submitMeal} />
    </>
  );
};

export default MealForm;
