import MealForm from "./MealForm";
import { BasicModal } from "../BasicModal";
import { useMealListContext } from "../../../hooks/useMealListContext";
import "../ModalStyle.css";

const MealModal = () => {
  const { isModalOpen, setIsModalOpen } = useMealListContext();

  return (
    <BasicModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
      <MealForm />
    </BasicModal>
  );
};

export default MealModal;
