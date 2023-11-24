import { useState } from "react";
import Dropdown from "./Dropdown";
import { Container } from "@mui/material";
import "./AddMealToTable.css";

export default function AddMealToTable({ meals }) {
  const [myvalue, setSelected] = useState("Choose one Meal");
  const [isActive, setIsActive] = useState(false);

  return (
    <Container className="AddMeaL">
      {" "}
      <p>Add Meal</p>
      <Dropdown
        setActivatedFromAbove={setIsActive}
        selected={myvalue}
        setSelected={setSelected}
        meals={meals}
      ></Dropdown>
    </Container>
  );
}