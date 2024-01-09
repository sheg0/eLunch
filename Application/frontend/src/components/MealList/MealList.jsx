import "./MealList.css";
import MealModal from "../Modal/MealModal/MealModal.jsx";
import MealListTable from "./MealListTable.jsx";
import { useMealListContext } from "../../hooks/useMealListContext.js";
import StyledButton from "../Styled_MUI_Components/StyledButton.jsx";
import { Button } from "@mui/material";
import styled from "@emotion/styled";


function MealList({ meals }) {
  const { openAddMealModal } = useMealListContext();
  return (
    <div className="MealList-App-Container">
      <MealListTable meals={meals} />
      <button
        onClick={openAddMealModal}
        className="MealList-AddMeal-Button">
          Gericht hinzufügen
      </button>
      <MealModal />
    </div>
  );
}

export default MealList;
