import React from "react";
import "../ModalStyle.css";
import { IoMdClose } from "react-icons/io";
import { Modal, Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50vh",
  left: "100vh",
  transform: "translate(30vh, -30vh)",
  minWidth: "50vh",
  maxWidth: "50vh",
  width: "auto",
  bgcolor: "background.paper",
  borderRadius: "2vh",
  p: "3vh",
};
const InfoDetailModal = ({ onClose, mealName, meal }) => {
  return (
    <div>
      <Box sx={style}>
        <div className="DetailModal-Header">
          <h1 className="InfoModal-Header">Informationen</h1>

          <button onClick={onClose} className="DetailModal-CloseButton">
            <IoMdClose />
          </button>
        </div>
        <div className="InfoDetailModal-Scroller">
          <p>
            Es handel sich bei <b>{mealName}</b> um ein(e){" "}
            <b>{meal.category}</b> das <b>{meal.difficulty}</b> innerhalb von
            etwa <b>{meal.timeNeeded} Minuten </b> zu zubereiten ist und kostet{" "}
            <b>{meal.cost} Euro</b> pro Portion.
          </p>

          <b>Zutaten:</b>
          <p>{meal.ingredients}</p>

          <b>Zubereitung:</b>
          <p>{meal.description}</p>
        </div>
      </Box>
    </div>
  );
};

export default InfoDetailModal;
