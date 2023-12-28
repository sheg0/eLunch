import { Container } from "@mui/material";
import "./MealList.css";
import MealModal from "../Modal/MealModal/MealModal.jsx";
import MealListTable from "./MealListTable.jsx";
import { useMealListContext } from "../../hooks/useMealListContext.js";
import StyledButton from "../Styled_MUI_Components/StyledButton.jsx";

function MealList({ meals }) {
  const { openAddMealModal } = useMealListContext();
  return (
    <Container>
      <MealListTable meals={meals} />
      <StyledButton variant="contained" onClick={openAddMealModal}>
        Gericht hinzufügen
      </StyledButton>
      <MealModal />
    </Container>
  );
}

export default MealList;
