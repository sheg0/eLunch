//import Tabelle from "../components/Tabelle.jsx";
import MealList from "../components/MealList/MealList.jsx";
import { MealListProvider } from "../context/MealModalContext.jsx";

const List = ({ meals }) => {
  return (
    <MealListProvider>
      <MealList meals={meals}></MealList>
    </MealListProvider>
  );
};

export default List;
