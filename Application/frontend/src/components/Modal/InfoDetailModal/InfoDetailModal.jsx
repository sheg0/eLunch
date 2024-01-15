import React from "react";
import "../ModalStyle.css";
import { RxCross1 } from "react-icons/rx";
import { Modal, Box, IconButton } from "@mui/material";
import { BasicModal } from "../BasicModal";
import Alcohol from "../../../images/Alcohol.png";
import Dairyfree from "../../../images/Dairyfree.png";
import Glutenfree from "../../../images/Glutenfree.png";
import Meat from "../../../images/Meat.png";
import Vegan from "../../../images/Vegan.png";
import Veggie from "../../../images/Veggie.png";
import styled from "@emotion/styled";

const style = {
  position: "absolute",
  top: "50vh",
  left: "100vh",
  transform: "translate(30vh, -30vh)",
  minWidth: "50vh",
  maxWidth: "50vh",
  bgcolor: "background.paper",
  borderRadius: "2vh",
  p: "3vh",
};

const StyledButton = styled(IconButton)({
  backgroundColor: "transparent",
  marginLeft: "auto",
  color: "black",
  marginBottom: "6%",
  "&:hover": {
    backgroundColor: "transparent",
  },
});

const InfoDetailModal = ({ onClose, mealName, meal }) => {
  console.log("meals, iffo", meal);
  return (
    <Box sx={style}>
      <div className="DetailModal-Header">
        <h1 className="InfoModal-Header">Informationen</h1>

        <StyledButton onClick={onClose}>
          <RxCross1 style={{ fontSize: "1.5vh" }} />
        </StyledButton>
      </div>
      <div className="InfoDetailModal-Scroller">
        <div className="InfoDetailModal-Tags">
          {meal.isVegan && (
            <img
              className="EventDetail-Tags"
              src={Vegan}
              alt="Vegan"
              title="Vegan"
            />
          )}
          {meal.isVegetarian && (
            <img
              className="EventDetail-Tags"
              src={Veggie}
              alt="Veggie"
              title="Vegetarisch"
            />
          )}
          {meal.isWithMeat && (
            <img
              className="EventDetail-Tags"
              src={Meat}
              alt="Meat"
              title="Mit Fleisch"
            />
          )}
          {meal.isWithAlcohol && (
            <img
              className="EventDetail-Tags"
              src={Alcohol}
              alt="Alcohol"
              title="Mit Alkohol"
            />
          )}
          {meal.isGlutenFree && (
            <img
              className="EventDetail-Tags"
              src={Glutenfree}
              alt="Glutenfree"
              title="Glutenfrei"
            />
          )}
          {meal.isLactoseFree && (
            <img
              className="EventDetail-Tags"
              src={Dairyfree}
              alt="Dairyfree"
              title="Laktosefrei"
            />
          )}
        </div>

        <p>
          Es handel sich bei <b>{mealName}</b> um ein(e) <b>{meal.category}</b>{" "}
          das <b>{meal.difficulty}</b> innerhalb von etwa{" "}
          <b>{meal.timeNeeded} Minuten </b> zu zubereiten ist und kostet{" "}
          <b>{meal.cost} Euro</b> pro Portion.
        </p>

        <b>Zutaten:</b>
        <p>{meal.ingredients}</p>

        <b>Zubereitung:</b>
        <p>{meal.description}</p>
      </div>
    </Box>
  );
};

export default InfoDetailModal;
