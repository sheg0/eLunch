import React from "react";
import { useState } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { useMealsContext } from "../hooks/useMealsContext";

const Meal = ({ meal }) => {
  return (
    <>
      <td>{meal?.name}</td>
      <td>{meal?.isVegetarian}</td>
      <td>{meal?.isVegan}</td>
      <td>{meal?.hasGluten}</td>
      <td>{meal?.type}</td>
    </>
  );
};

export default Meal;
