import { BasicModal } from "../BasicModal";
import TextField from "@mui/material/TextField";
import "../ModalStyle.css";
import { FiEdit2, FiTrash2, FiX } from "react-icons/fi";
import { MdDone, MdClear } from "react-icons/md";
import { LuShoppingBasket } from "react-icons/lu";
import { PiCookingPot } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { useState } from "react";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
export const EventDetailModal = ({
  element,
  isOpen,
  setIsOpen,
  handleSubscribeClick,
  handleUnsubscribeClick,
  setEvent,
}) => {
  let participants = [];
  console.log(element.participants);

  const toArray = () => {
    Object.keys(element.participants).forEach(function (key, index) {
      participants.push(element.participants[key]);
    });
    console.log(participants);
  };

  const [buttonColors, setButtonColors] = useState({
    button1: "#C5C5C5",
    button2: "#C5C5C5",
    button3: "#C5C5C5",
    button4: "#C5C5C5",
    button5: "#C5C5C5",
  });

  const [isClicked, setIsClicked] = useState({
    icon1: false,
    icon2: false,
    icon3: false,
    icon4: false,
    icon5: false,
  });

  const handleItAll = (buttonId) => {
    handleClick(buttonId);
    handleIconClick(buttonId);
  };

  const handleClick = (buttonId) => {
    const updatedButtonColors = { ...buttonColors };
    updatedButtonColors[buttonId] =
      updatedButtonColors[buttonId] === "#C5C5C5" ? "#043C5F" : "#C5C5C5";
    setButtonColors(updatedButtonColors);
  };

  const handleIconClick = (iconId) => {
    switch (iconId) {
      case "button1":
        let updatedValue = {};
        updatedValue = { icon1: !isClicked.icon1 };
        setIsClicked((prevValue) => ({
          ...prevValue,
          ...updatedValue,
        }));
        break;
      case "button2":
        let updatedValue2 = {};
        updatedValue2 = { icon2: !isClicked.icon2 };
        setIsClicked((prevValue) => ({
          ...prevValue,
          ...updatedValue2,
        }));
        break;
      case "button3":
        let updatedValue3 = {};
        updatedValue3 = { icon3: !isClicked.icon3 };
        setIsClicked((prevValue) => ({
          ...prevValue,
          ...updatedValue3,
        }));
        break;
      case "button4":
        let updatedValue4 = {};
        updatedValue4 = { icon4: !isClicked.icon4 };
        setIsClicked((prevValue) => ({
          ...prevValue,
          ...updatedValue4,
        }));
        break;
      case "button5":
        let updatedValue5 = {};
        updatedValue5 = { icon5: !isClicked.icon5 };
        setIsClicked((prevValue) => ({
          ...prevValue,
          ...updatedValue5,
        }));
        break;
    }
  };

  const dateOptions = {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  };

  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedDate = element.date
    ? new Date(element.date)
        .toLocaleDateString("de-DE", dateOptions)
        .replace(",", " - ")
    : "default";

  const formattedTime = element.date
    ? new Date(element.date).toLocaleTimeString("de-DE", timeOptions)
    : "default";

  return (
    <BasicModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="DetailModal-Header">
        <button className="DetailModal-Button">
          <FiEdit2 />
        </button>
        <button className="DetailModal-Button">
          <FiTrash2 />
        </button>
        <h1 className="Modal-Header">{formattedDate}</h1>
      </div>

      <div className="EventModal-Container">
        <p className="Modal-Time">{formattedTime}</p>
        <p className="Modal-Meal">{element.meal.name || "default"}</p>
      </div>

      {toArray()}

      {participants
        .filter((participant) => participant.isCreator)
        .map((participant, i) => (
          <div key={i} className="DetailModal-Header">
            {i == 0 && <div className="EventDetail-Text">Ersteller</div>}
            <div className="EventDetail-Fields">
              {participant.firstName[0] + participant.lastName[0] || "default"}
            </div>
          </div>
        ))}

      {participants.map((participant, i) => (
        <div key={participant.id} className="DetailModal-Header">
          {i == 0 && <div className="EventDetail-Text">Zugesagt</div>}
          <div className="EventDetail-Fields">
            {participant.firstName[0] + participant.lastName[0] || "default"}
          </div>
        </div>
      ))}

      {participants
        .filter((participant) => participant.isCook)
        .map((participant, i) => (
          <div key={i} className="DetailModal-Header">
            {i == 0 && <div className="EventDetail-Text">Kochen</div>}
            <div className="EventDetail-Fields">
              {participant.firstName[0] + participant.lastName[0] || "default"}
            </div>
          </div>
        ))}

      {participants
        .filter((participant) => participant.isBuyer)
        .map((participant, i) => (
          <div key={i} className="DetailModal-Header">
            {i == 0 && <div className="EventDetail-Text">Einkaufer</div>}
            <div className="EventDetail-Fields">
              {participant.firstName[0] + participant.lastName[0] || "default"}
            </div>
          </div>
        ))}

      <hr />
      <Tooltip title="Mitessen" arrow>
        <IconButton
          onClick={() => {
            handleItAll("button1");
            handleSubscribeClick(element);
          }}
          style={{
            width: "7vh",
            height: "3vh",
            backgroundColor: buttonColors.button1,
            borderRadius: 8,
            margin: "1vh",
          }}
        >
          <MdDone style={{ color: isClicked.icon1 ? "white" : "black" }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Nicht Mitessen" arrow>
        <IconButton
          onClick={() => {
            handleItAll("button2");
            handleUnsubscribeClick(element);
          }}
          style={{
            width: "7vh",
            height: "3vh",
            backgroundColor: buttonColors.button2,
            borderRadius: 8,
            marginRight: "10vh",
          }}
        >
          <MdClear style={{ color: isClicked.icon2 ? "white" : "black" }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Mitkochen" arrow>
        <IconButton
          onClick={() => {
            handleItAll("button3");
            setEvent(...element, "isCook": )
          }}
          style={{
            width: "7vh",
            height: "3vh",
            backgroundColor: buttonColors.button3,
            borderRadius: 8,
            marginRight: "1vh",
          }}
        >
          <PiCookingPot
            style={{ color: isClicked.icon3 ? "white" : "black" }}
          />
        </IconButton>
      </Tooltip>

      <Tooltip title="Einkaufen" arrow>
        <IconButton
          onClick={() => handleItAll("button4")}
          style={{
            width: "7vh",
            height: "3vh",
            backgroundColor: buttonColors.button4,
            borderRadius: 8,
            marginRight: "1vh",
          }}
        >
          <LuShoppingBasket
            style={{ color: isClicked.icon4 ? "white" : "black" }}
          />
        </IconButton>
      </Tooltip>

      <Tooltip title="Organisieren" arrow>
        <IconButton
          onClick={() => handleItAll("button5")}
          style={{
            width: "7vh",
            height: "3vh",
            backgroundColor: buttonColors.button5,
            borderRadius: 8,
            marginRight: "1vh",
          }}
        >
          <IoPersonOutline
            style={{ color: isClicked.icon5 ? "white" : "black" }}
          />
        </IconButton>
      </Tooltip>
    </BasicModal>
  );
};

/*  
{element.participants.userName.map((participant) => (
        <div>{participant}</div>
      ))} 
*/
