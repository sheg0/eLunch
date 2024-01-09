import MealListTableHeader from "./MealListTableHeader";
import MealListTableBody from "./MealListTableBody";

const MealListTable = ({ meals }) => {
  return (
    <div className="MealList-Table-Container">
      <table className="MealList-Table">
        <MealListTableHeader />
        <MealListTableBody meals={meals} />
      </table>
    </div>
  );
};

export default MealListTable;
