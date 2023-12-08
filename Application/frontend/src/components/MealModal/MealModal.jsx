import MealForm from "./MealForm";
const MealModal = ({ meal, setMeal, isEditing, setIsEditing }) => {
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
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MealModal;
