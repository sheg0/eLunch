import MealInputElements from "./MealInputElements";
import MealInputDropdowns from "./MealInputDropdowns";
import MealImageCheckboxes from "./MealImageCheckboxes";
import StyledButton from "../../Styled_MUI_Components/StyledButton";
import { useMealListContext } from "../../../hooks/useMealListContext";
import { Typography } from "@mui/material";

const MealForm = () => {
  const { meal, submitMeal } = useMealListContext();

  console.log("meal", meal);
  return (
    <>
      <h1 className="Modal-Header">Gericht hinzufügen/bearbeiten</h1>

      <div className="MealForm-Container">
        <MealInputElements />
        <MealInputDropdowns />
        <MealImageCheckboxes />
      </div>

      <button
        style={{ marginTop: "2vh", width: "100%" }}
        className="EventModal-Button"
        onClick={() => submitMeal(meal)}
      >
        Bestätigen
      </button>
    </>
  );
};

export default MealForm;
