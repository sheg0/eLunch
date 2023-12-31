import MealInputElements from "./MealInputElements";
import MealInputDropdowns from "./MealInputDropdowns";
import MealImageCheckboxes from "./MealImageCheckboxes";
import StyledButton from "../../Styled_MUI_Components/StyledButton";
import { useMealListContext } from "../../../hooks/useMealListContext";
import { Typography } from "@mui/material";

const MealForm = () => {
  const { meal, submitMeal } = useMealListContext();

  return (
    <>
      <h1 className="Modal-Header">Gericht hinzufügen/bearbeiten</h1>
      <div className="EventModal-Content">
        <div className="MealModal-Container">
          <MealInputElements />
          <MealInputDropdowns />
          <MealImageCheckboxes />
        </div>

        <button className="EventModal-Button" onClick={() => submitMeal(meal)}>
          BESTÄTIGEN
        </button>
      </div>
    </>
  );
};

export default MealForm;
