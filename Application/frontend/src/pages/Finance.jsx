import { useState, useEffect } from "react";
import Finance from "../components/Finance/Finance";

const Fin = ({ finances }) => {
  console.log("finance Page: ", finances);
  return <Finance finances={finances}></Finance>;
};

export default Fin;
