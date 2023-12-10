import * as React from "react";
import Vegan from "../../images/Vegan.png";
import Veggie from "../../images/Veggie.png";
import Dairyfree from "../../images/Dairyfree.png";
import { MdDone, MdClear } from "react-icons/md";
import { LuShoppingBasket } from "react-icons/lu";
import { PiCookingPot } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { useState } from "react";
import { useEventsContext } from "../../hooks/useEventsContext";
import Dropdown from "../Dropdown/Dropdown.jsx";
import MealInfo from "../MealInfo/MealInfo.jsx";
import { IoIosInformationCircle } from "react-icons/io";

function CustomModal({ month, day, open, setOpen, meals }) {
  const date = `Monday - ${day}.${month}`;
  //const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //setting event attributes
  const { dispatch } = useEventsContext();
  const [isCook, setIsCook] = useState(false);
  //const [isBuyer, setIsBuyer] = useState(false);

  //config for dropdown
  const [isChecked, setIsChecked] = useState("Please Select one");
  const [name, setName] = useState("Please Select a Meal");
  const [isActive, setIsActive] = useState(false);

  //second modal
  const [isModalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const event = { isCook };

    const response = await fetch("/api/events", {
      method: "POST",
      body: JSON.stringify(event),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log("Response is not ok");
      //setError(json.error);
      //setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setIsCook("");
      //setIsVegetarian("");
      //setIsVegan("");
      //setHasGluten("");
      //setType("");
      //setChecked(false);
      //setError(null);
      //setEmptyFields([]);

      console.log("New event Added", json);

      dispatch({ type: "CREATE_EVENT", payload: json });
    }
  };

  const [buttonColors, setButtonColors] = useState({
    button1: "#C5C5C5",
    button2: "#C5C5C5",
    isCook: "#C5C5C5",
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
      case "isCook":
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

  return (
    <div>
      <button onClick={openModal}>öffnen</button>
      {isModalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            hell
            <button onClick={closeModal}>close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomModal;
