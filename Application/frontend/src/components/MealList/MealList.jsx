import "./MealList.css";
import MealModal from "../Modal/MealModal/MealModal.jsx";
import MealListTable from "./MealListTable.jsx";
import { useMealListContext } from "../../hooks/useMealListContext.js";
import StyledButton from "../Styled_MUI_Components/StyledButton.jsx";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledEventButton = styled(Button)({
  fontFamily: "Segoe UI",
  fontWeight: 400,
  color: "white",
  backgroundColor: "#043c5f",
  width: "auto",
  borderRadius: "1vh",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(3, 40, 63, 1)",
  },
});

function MealList({ meals }) {
  const { openAddMealModal } = useMealListContext();
  return (
    <div className="MealList-App-Container">
      <MealListTable meals={meals} />
      <StyledEventButton onClick={openAddMealModal}>
        Gericht hinzufügen
      </StyledEventButton>
      <MealModal />
    </div>
  );
}

export default MealList;
