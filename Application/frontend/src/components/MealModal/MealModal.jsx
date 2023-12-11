import MealForm from "./MealForm";
import { useMealListContext } from "../../hooks/useMealListContext";

const MealModal = () => {
  const { isModalOpen } = useMealListContext();

  return (
    <div className="modal">
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <MealForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default MealModal;
