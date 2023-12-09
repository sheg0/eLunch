import { useContext } from "react";
import { MealListContext } from "../../context/MealModalContext.jsx";
import MealTableData from "./Meal.jsx";
import { FaPen } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const MealListTableBody = ({ meals, handleClickDelete }) => {
  const { deleteMeal, handleClickMealEdit } = useContext(MealListContext);

  return (
    <tbody>
      {meals?.map((meal) => (
        <tr key={meal?._id}>
          <MealTableData meal={meal}></MealTableData>

          <td>
            <div className="icon-container">
              <button
                onClick={() => handleClickMealEdit(meal)}
                className="icon-button edit"
              >
                <FaPen />
              </button>

              <div className="icon-gap"></div>

              <button
                onClick={() => deleteMeal(meal)}
                className="icon-button delete"
              >
                <FaRegTrashAlt />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default MealListTableBody;
