import { Container } from "@mui/material";
import "./MealList.css";
import "../MealModal/MealModal.css";
import MealModal from "../MealModal/MealModal.jsx";
import MealListTable from "./MealListTable.jsx";
import { useContext } from "react";
import { MealListContext } from "../../context/MealModalContext.jsx";

function MealList({ meals }) {
  const { openAddMealModal } = useContext(MealListContext);
  return (
    <Container>
      <MealListTable meals={meals} />
      <button className="addMealButton" onClick={openAddMealModal}>
        Add Meal
      </button>
      <MealModal />
    </Container>
  );
}

export default MealList;
