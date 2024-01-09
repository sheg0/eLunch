import MealTableData from "./MealTableData.jsx";
import { FaPen, FaRegTrashAlt } from "react-icons/fa";
import { useMealListContext } from "../../hooks/useMealListContext.js";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaInfoCircle } from "react-icons/fa";
import Box from "@mui/material/Box";
import { Backdrop } from "@mui/material";

const style = {
  position: "absolute",
  top: "35vh",
  left: "85vh",
  transform: "translate(-30vh, -30vh)",
  maxWidth: "100vh",
  minWidth: "90vh",
  width: "auto",
  bgcolor: "#f1f1f1",
  borderRadius: "2vh",
  p: "2vh",
};

const backdropStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.05)",
  zIndex: 1,
};

const MealListTableBody = ({ meals, handleClickDelete }) => {
  const { deleteMeal, handleClickMealEdit } = useMealListContext();
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [selectedInfo, setSelectedInfo] = useState(null);

  const openDeleteModal = (meal) => {
    setSelectedMeal(meal);
  };

  const closeDeleteModal = () => {
    setSelectedMeal(null);
  };

  const openInfoModal = (meal) => {
    setSelectedInfo(meal);
  };

  const closeInfoModal = () => {
    setSelectedInfo(null);
  };

  return (
    <tbody>
      {meals?.map((meal) => (
        <tr key={meal?._id}>
          <MealTableData meal={meal}></MealTableData>

          <td>
            <div className="MeaList-icon-container">
              <button
                onClick={() => openInfoModal(meal)}
                className="MealList-icon-button"
              >
                <FaInfoCircle />
              </button>
              <div className="MealList-icon-gap"></div>
              <button
                onClick={() => handleClickMealEdit(meal)}
                className="MealList-icon-button"
              >
                <FaPen />
              </button>

              <div className="MealList-icon-gap"></div>

              <button
                onClick={() => openDeleteModal(meal)}
                className="MealList-icon-button delete"
              >
                <FaRegTrashAlt />
              </button>

              {selectedMeal && selectedMeal.id === meal.id && (
                <div style={backdropStyle}>
                  <div className="MealList-Delete-Modal">
                    <div className="mealDelete-content">
                      <button
                        className="mealDelete-close"
                        onClick={closeDeleteModal}
                      >
                        <RxCross1 />
                      </button>
                      <p>
                        Möchten Sie wirklich{" "}
                        <strong>{selectedMeal.name}</strong> löschen?
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
                </div>
              )}

              {selectedInfo && selectedInfo.id === meal.id && (
                <div style={backdropStyle}>
                  <Box sx={style}>
                    <button
                      className="mealDelete-close"
                      onClick={closeInfoModal}
                    >
                      <RxCross1 />
                    </button>
                    <p className="MealList-Info-Header">{selectedInfo.name}</p>
                    <div className="MealList-Info-Modal">
                      <hr />
                      <div className="MealList-Info-TextContent">
                        <div className="MealList-Info-DescriptionBox">
                          <b className="MealList-Info-TextBox">Zutaten</b>
                          <p className="MealList-Details">
                            {selectedInfo.ingredients}
                          </p>
                        </div>
                        <div>
                          <b>Zubereitung</b>
                          <p className="MealList-Details">
                            {selectedInfo.description}
                          </p>
                        </div>
                      </div>
                      <div className="MealList-Info-TextContentSecond">
                        <div className="MealList-Info-TextBox">
                          <b>Zeit in Minuten</b>
                          <p>{selectedInfo.timeNeeded}</p>
                        </div>
                        <div className="MealList-Info-TextBox">
                          <b>Kosten €</b>
                          <p>{selectedInfo.cost}</p>
                        </div>
                        <div className="MealList-Info-TextBox">
                          <b>Kategorie</b>
                          <p>{selectedInfo.category}</p>
                        </div>
                        <div className="MealList-Info-TextBox">
                          <b>Schwierigkeit</b>
                          <p>{selectedInfo.difficulty}</p>
                        </div>
                      </div>
                      <div className="MealList-Info-TextBox">
                        <b>Tags</b>
                        <p>Hier kommen noch die Tags hin</p>
                      </div>
                    </div>
                  </Box>
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