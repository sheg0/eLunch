import * as React from "react";
import { useTable } from "react-table";
import { Container } from "@mui/material";
import { useState } from "react";
import "../styles/MealList.css";

function MealList({ meals }) {
  return (
    <Container>
      <div className="table-container" style={{ fontFamily: "Segoe UI" }}>
        <table className="table-content">
          <thead className="thead-content">
            <tr>
              <th>ID</th>
              <th>Gericht</th>
              <th>Kategorie</th>
              <th>Schwierigkeit</th>
              <th>Zeitaufwand</th>
              <th>Kosten pro Person</th>
            </tr>
          </thead>
        </table>
        <div className="table-body">
          <table className="table-content">
            <tbody>
              {meals?.map((meal) => (
                <tr key={meal?._id + 1}>
                  <td>{meal?.id}</td>
                  <td>{meal?.name}</td>
                  <td>{meal?.isVegetarian}</td>
                  <td>{meal?.isVegan}</td>
                  <td>{meal?.hasGluten}</td>
                  <td>{meal?.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}

export default MealList;
