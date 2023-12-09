import MealForm from "./MealForm";
const MealModal = ({ meal, setMeal, isEditing, setIsEditing, submitMeal }) => {
  return (
    <div className="modal">
      {isEditing && (
        <div className="modal-overlay">
          <div className="modal-content">
            <MealForm
              meal={meal}
              setMeal={setMeal}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              submitMeal={submitMeal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MealModal;
