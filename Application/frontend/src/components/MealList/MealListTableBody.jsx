import { FaPen } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import Meal from "../Meal.jsx";

const MealListTableBody = ({
  meals,
  setIsEditing,
  handleClickMealEdit,
  handleClickDelete,
}) => {
  return (
    <tbody>
      {meals?.map((meal) => (
        <tr key={meal?._id}>
          <Meal meal={meal} setIsEditing={setIsEditing}></Meal>

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
                onClick={() => handleClickDelete(meal)}
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
