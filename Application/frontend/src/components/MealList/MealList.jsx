import * as React from "react";
import { useTable } from "react-table";
import { Container } from "@mui/material";
import { useState } from "react";
import "./MealList.css";
import Modal from "../AddNewMeal/AddNewMeal.jsx";
import { FaPen } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

function MealList({ meals }) {
  return (
    <Container>
      <div className="table-con">
        <table className="table">
          <thead>
            <tr>
              <th>Gericht</th>
              <th>Kategorie</th>
              <th>Schwierigkeit</th>
              <th>Zeitaufwand</th>
              <th>Kosten pro Person</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {meals?.map((meal) => (
              <tr key={meal?._id + 1}>
                <td>{meal?.name}</td>
                <td>{meal?.isVegetarian}</td>
                <td>{meal?.isVegan}</td>
                <td>{meal?.hasGluten}</td>
                <td>{meal?.type}</td>
                <td>
                  {" "}
                  <div className="icon-container">
                    <button className="icon-button">
                      <FaPen />{" "}
                    </button>

                    <div className="icon-gap"></div>
                    <button className="icon-button">
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal></Modal>
    </Container>
  );
}

export default MealList;
