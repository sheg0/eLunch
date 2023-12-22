import MealTableData from "./MealTableData.jsx";
import { FaPen, FaRegTrashAlt } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useMealListContext } from "../../hooks/useMealListContext.js";
import React, { useState } from "react";

const MealListTableBody = ({ meals, handleClickDelete }) => {
  const { deleteMeal, handleClickMealEdit } = useMealListContext();
  const [selectedMeal, setSelectedMeal] = useState(null);

  const openDeleteModal = (meal) => {
    setSelectedMeal(meal);
  };

  const closeDeleteModal = () => {
    setSelectedMeal(null);
  };

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
                onClick={() => openDeleteModal(meal)}
                className="icon-button delete"
              >
                <FaRegTrashAlt />
              </button>

              {selectedMeal && selectedMeal.id === meal.id && (
                <div className="mealDelete-Modal">
                  <div className="mealDelete-content">
                    <button
                      className="mealDelete-close"
                      onClick={closeDeleteModal}
                    >
                      <RxCross1 />
                    </button>
                    <p>
                      Möchten Sie wirklich <strong>{selectedMeal.name}</strong>{" "}
                      löschen?
                    </p>
                    <button
                      className="MealDelete-Button"
                      onClick={() => {
                        deleteMeal(selectedMeal);
                        closeDeleteModal();
                      }}
                    >
                      Löschen
                    </button>
                  </div>
                </div>
              )}
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default MealListTableBody;
