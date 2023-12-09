import { useContext } from "react";
import { MealListContext } from "../../context/MealModalContext";
import MealListTableHeader from "./MealListTableHeader";
import MealListTableBody from "./MealListTableBody";

const MealListTable = ({ meals }) => {
  return (
    <div className="table-con">
      <table className="table">
        <MealListTableHeader />
        <MealListTableBody meals={meals} />
      </table>
    </div>
  );
};

export default MealListTable;
