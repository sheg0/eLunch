import MealForm from "./MealForm";
const MealModal = ({ isEditing, meal, setMeal }) => {
  return (
    <div className="modal">
      {isEditing && (
        <div className="modal-overlay">
          <div className="modal-content">
            <MealForm meal={meal} setMeal={setMeal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MealModal;
