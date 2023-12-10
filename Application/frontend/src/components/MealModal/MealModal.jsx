import { useContext } from "react";
import { MealListContext } from "../../context/MealModalContext";
import MealForm from "./MealForm";

const MealModal = () => {
  const { isModalOpen } = useContext(MealListContext);

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
