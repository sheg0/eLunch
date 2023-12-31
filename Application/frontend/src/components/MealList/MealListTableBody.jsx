import MealTableData from "./MealTableData.jsx";
import { FaPen, FaRegTrashAlt } from "react-icons/fa";
import { useMealListContext } from "../../hooks/useMealListContext.js";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

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
            <div className="MeaList-icon-container">
              <button
                onClick={() => handleClickMealEdit(meal)}
                className="MealList-icon-button"
              >
                <FaPen />
              </button>

              <div className="MealList-icon-gap"></div>

              <button
                onClick={() => openDeleteModal(meal)}
                className="MealList-icon-button"
              >
                <FaRegTrashAlt />
              </button>

              {selectedMeal && selectedMeal.id === meal.id && (
                <div className="MealList-Delete-Modal">
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
