import "./MealList.css";
import "../MealModal/MealModal.css";
import MealModal from "../MealModal/MealModal.jsx";
import MealListTable from "./MealListTable.jsx";
import { useMealListContext } from "../../hooks/useMealListContext.js";

function MealList({ meals }) {
  const { openAddMealModal } = useMealListContext();
  return (
    <div className="mealList-app-container">
      <MealListTable meals={meals} />
      <button onClick={openAddMealModal}>Add Meal</button>
      <MealModal />
    </div>
  );
}

export default MealList;
