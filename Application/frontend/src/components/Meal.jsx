import React from "react";
import { useState } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { useMealsContext } from "../hooks/useMealsContext";

const Meal = ({ meal }) => {
  return (
    <>
      <td>{meal?.name}</td>
      <td>{meal?.category}</td>
      <td>{meal?.difficulty}</td>
      <td>{meal?.timeNeeded}</td>
      <td>{meal?.cost}</td>
    </>
  );
};

export default Meal;
