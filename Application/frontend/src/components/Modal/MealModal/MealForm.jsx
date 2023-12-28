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
      <Typography variant="h5">Gericht hinzufügen/bearbeiten</Typography>
      <MealInputElements />
      <MealInputDropdowns />
      <MealImageCheckboxes />
      <StyledButton onClick={() => submitMeal(meal)} variant="contained">
        Bestätigen
      </StyledButton>
    </>
  );
};

export default MealForm;
