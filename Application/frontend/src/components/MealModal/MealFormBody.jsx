import { useContext } from "react";
import { MealListContext } from "../../context/MealModalContext";
import MealInputElements from "./MealInputElements";
import MealInputDropdowns from "./MealInputDropdowns";
import MealImageCheckboxes from "./MealImageCheckboxes";
import { useKeycloak } from "@react-keycloak/web";
import { MealContext } from "../../context/MealContext";

const MealFormBody = () => {
  const { meal, submitMeal } = useContext(MealListContext);

  return (
    <div className="inputField">
      <MealInputElements />
      <MealInputDropdowns />
      <MealImageCheckboxes />
      <div className="btnPos">
        <button
          className="btnMeal btn-newMeal"
          onClick={() => submitMeal(meal)}
        >
          Bestätigen
        </button>
      </div>
    </div>
  );
};

export default MealFormBody;
