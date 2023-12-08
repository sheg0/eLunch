import MealFormHeader from "./MealFormHeader";
import MealFormBody from "./MealFormBody";

const MealForm = ({ meal, setMeal, isEditing, setIsEditing }) => {
  console.log(setIsEditing);
  return (
    <>
      <MealFormHeader isEditing={isEditing} setIsEditing={setIsEditing} />
      <MealFormBody meal={meal} setMeal={setMeal} />
    </>
  );
};

export default MealForm;
