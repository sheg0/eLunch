import React from "react";

const MealTableData = ({ meal }) => {
  return (
    <>
      <td>{meal?.name}</td>
      <td>{meal?.category}</td>
      <td>{meal?.difficulty}</td>
      <td>{meal?.timeNeeded}</td>
      <td>{meal?.cost.toFixed(2)}</td>
    </>
  );
};

export default MealTableData;
