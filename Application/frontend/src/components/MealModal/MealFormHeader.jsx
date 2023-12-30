import { RxCross1 } from "react-icons/rx";
import { useMealListContext } from "../../hooks/useMealListContext";

const MealFormHeader = () => {
  const { meal, submitMeal } = useMealListContext();
  const { isModalOpen, setIsModalOpen } = useMealListContext();
  return (
    <div className="MealModal-Header">
      <button
        className="MealModal-CrossIcon"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <RxCross1 />
      </button>
      <h2>Neues Gericht hinzufügen</h2>

      <p>
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
      <div className="MealModal-Button-Overlay">
        <button className="MealModal-Button" onClick={() => submitMeal(meal)}>
          Bestätigen
        </button>
      </div>
    </div>
  );
};

export default MealFormHeader;
