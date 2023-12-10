import { useContext } from "react";
import { MealListContext } from "../../context/MealModalContext";
import { RxCross1 } from "react-icons/rx";

const MealFormHeader = () => {
  const { isModalOpen, setIsModalOpen } = useContext(MealListContext);
  return (
    <div className="mealHeader">
      <h2>Neues Gericht hinzufügen</h2>
      <button
        className="cross-icon btn-newMeal"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <RxCross1 />
      </button>
      <p className="newMealP">
        Name <br />
        Zutaten (pro Person) <br />
        Beschreibung <br />
        Zeitaufwand <br />
        Kosten (pro Person) <br />
        Kategorie <br />
        Schwierigkeit <br />
        Tags <br />
        <br />
      </p>
    </div>
  );
};

export default MealFormHeader;
