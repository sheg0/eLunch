import { BasicModal } from "../BasicModal";
import TextField from "@mui/material/TextField";
import "../ModalStyle.css";
import { FiEdit2, FiTrash2, FiX } from "react-icons/fi";
import { MdDone, MdClear } from "react-icons/md";
import { LuShoppingBasket } from "react-icons/lu";
import { PiCookingPot } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { useState } from "react";
import { IconButton, Modal } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { useKeycloak } from "@react-keycloak/web";
import { useCalendarContext } from "../../../hooks/useCalendarContext";
import { FaInfoCircle } from "react-icons/fa";
import InfoDetailModal from "../InfoDetailModal/InfoDetailModal";
import MealImageCheckbox from "../MealModal/MealImageCheckbox";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Alcohol from "../../../images/Alcohol.png";
import Dairyfree from "../../../images/Dairyfree.png";
import Glutenfree from "../../../images/Glutenfree.png";
import Meat from "../../../images/Meat.png";
import Vegan from "../../../images/Vegan.png";
import Veggie from "../../../images/Veggie.png";
import { RxCross1 } from "react-icons/rx";

const StyledIconButton = styled(Button)({
  height: "3vh",
  width: "8vh",
  fontSize: "2.5vh",
  borderRadius: "1vh",
  marginRight: "1vh",
  color: "black",
});

const StyledIconButton2 = styled(Button)({
  height: "3vh",
  width: "8vh",
  fontSize: "2.5vh",
  borderRadius: "1vh",
  marginRight: "6vh",
  color: "black",
});

export const EventDetailModal = ({
  event,
  isOpen,
  setIsOpen,
  handleSubscribeClick,
  handleUnsubscribeClick,
  setEvent,
}) => {
  console.log("Event:", event);
  const { keycloak } = useKeycloak();
  const { updateEvent, deleteEvent } = useCalendarContext();
  const [selectedEvent, setSelectedEvent] = useState(null);
  let participants = [];
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);
  const [subscribeButtonColor, setSubscribeButtonColor] = useState({
    backgroundColor: "#a3a3a3",
    color: "black",
  });
  const [unsubscribeButtonColor, setUnsubscribeButtonColor] =
    useState("#a3a3a3");
  const [cookButtonColor, setCookButtonColor] = useState("#a3a3a3");
  const [buyerButtonColor, setBuyerButtonColor] = useState("#a3a3a3");
  const [organizeButtonColor, setOrganizeButtonColor] = useState("#a3a3a3");

  console.log("mealinfoo: ", event.mealInfo);

  const openInfoModal = () => {
    setInfoModalOpen(true);
  };
  const closeInfoModal = () => {
    setInfoModalOpen(false);
  };

  const openDeleteEvent = (event) => {
    setSelectedEvent(event);
  };
  const closeDeleteModal = () => {
    setSelectedEvent(null);
  };

  const toggleColor = (currentColor, defaultColor) => {
    return currentColor === defaultColor ? "#043c5f" : defaultColor;
  };

  const mealName = event?.meal?.name || "default";
  const meal = event?.meal;
  const toArray = () => {
    if (event != null) {
      Object.keys(event?.participants).forEach(function (key, index) {
        participants.push(event.participants[key]);
      });
      console.log(participants);
    }
  };

  const setEventProperty = (propertyName) => {
    const currentUserName = keycloak.tokenParsed.preferred_username;

    const updatedEvent = {
      ...event,
      participants: event.participants.map((participant) =>
        participant.userName === currentUserName
          ? { ...participant, [propertyName]: !participant[propertyName] }
          : participant
      ),
    };

    setEvent(updatedEvent);
    updateEvent(updatedEvent);
  };

  const handleDeleteClick = (eventID) => {
    if (event && eventID) {
      deleteEvent(eventID);
    } else {
      console.log("Event ID not available");
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

  const formattedDate =
    event?.date != null
      ? new Date(event.date)
          .toLocaleDateString("de-DE", dateOptions)
          .replace(",", " - ")
      : "default";

  const formattedTime =
    event?.date != null
      ? new Date(event.date).toLocaleTimeString("de-DE", timeOptions)
      : "default";

  return (
    <BasicModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="DetailModal-Header">
        <h1 className="Modal-Header Meal">{formattedDate}</h1>
        <button className="DetailModal-Button">
          <FiEdit2 />
        </button>
        <button
          className="DetailModal-Button"
          onClick={() => openDeleteEvent(event)}
        >
          <FiTrash2 />
        </button>
      </div>
      {selectedEvent && selectedEvent.id === event.id && (
        <div className="MealList-Delete-Modal">
          <div className="mealDelete-content">
            <button className="mealDelete-close" onClick={closeDeleteModal}>
              <RxCross1 />
            </button>
            <p>
              Möchten Sie wirklich <strong>{selectedEvent.name}</strong>{" "}
              löschen?
            </p>
            <button
              className="MealDelete-Button"
              onClick={() => {
                deleteEvent(selectedEvent);
                closeDeleteModal();
              }}
            >
              Löschen
            </button>
          </div>
        </div>
      )}

      <div className="EventModal-Container">
        <p className="Modal-Time">{formattedTime}</p>
        <p className="Modal-Meal">{event?.meal?.name || "default"}</p>

        <button className="DetailModal-InfoButton" onClick={openInfoModal}>
          <FaInfoCircle />
        </button>

        <Modal
          open={isInfoModalOpen}
          onClose={closeInfoModal}
          BackdropComponent={null}
        >
          <InfoDetailModal
            mealName={mealName}
            meal={meal}
            onClose={closeInfoModal}
          />
        </Modal>
      </div>
      <div className="DetailModal-Tags">
        {event && event.mealInfo && event.mealInfo.isVegan && (
          <img
            className="EventDetail-Tags"
            src={Vegan}
            alt="Vegan"
            title="Vegan"
          />
        )}
        {event && event.mealInfo && event.mealInfo.isVegetarian && (
          <img
            className="EventDetail-Tags"
            src={Veggie}
            alt="Veggie"
            title="Vegetarisch"
          />
        )}
        {event && event.mealInfo && event.mealInfo.isWithMeat && (
          <img
            className="EventDetail-Tags"
            src={Meat}
            alt="Meat"
            title="Mit Fleisch"
          />
        )}
        {event && event.mealInfo && event.mealInfo.isWithAlcohol && (
          <img
            className="EventDetail-Tags"
            src={Alcohol}
            alt="Alcohol"
            title="Mit Alkohol"
          />
        )}
        {event && event.mealInfo && event.mealInfo.isGlutenFree && (
          <img
            className="EventDetail-Tags"
            src={Glutenfree}
            alt="Glutenfree"
            title="Glutenfrei"
          />
        )}
        {event && event.mealInfo && event.mealInfo.isLactoseFree && (
          <img
            className="EventDetail-Tags"
            src={Dairyfree}
            alt="Dairyfree"
            title="Laktosefrei"
          />
        )}
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

      {participants
        .filter((participant) => participant.isOrganisator)
        .map((participant, i) => (
          <div key={i} className="DetailModal-Header">
            {i == 0 && <div className="EventDetail-Text">Organisator</div>}
            <div className="EventDetail-Fields">
              {participant.firstName[0] + participant.lastName[0] || "default"}
            </div>
          </div>
        ))}
      {event.note && (
        <div className="DetailModal-Header">
          <div className="EventDetail-Text">
            Anmerkung:
            <div className="EventDetail-Fields">{event.note}</div>
          </div>
        </div>
      )}

      <hr />
      <Tooltip title="Mitessen" arrow>
        <StyledIconButton
          onClick={() => {
            handleSubscribeClick(event);
            setSubscribeButtonColor((currentColors) => ({
              backgroundColor: toggleColor(
                currentColors.backgroundColor,
                "#a3a3a3"
              ),
              color: toggleColor(currentColors.color, "white"),
            }));
          }}
          style={{
            backgroundColor: subscribeButtonColor.backgroundColor,
            color: subscribeButtonColor.color,
          }}
        >
          <MdDone />
        </StyledIconButton>
      </Tooltip>
      <Tooltip title="Nicht Mitessen" arrow>
        <StyledIconButton2
          onClick={() => {
            handleUnsubscribeClick(event);
            setUnsubscribeButtonColor((currentColor) =>
              toggleColor(currentColor, "#a3a3a3")
            );
          }}
          style={{
            backgroundColor: unsubscribeButtonColor,
          }}
        >
          <MdClear />
        </StyledIconButton2>
      </Tooltip>
      <Tooltip title="Mitkochen" arrow>
        <StyledIconButton
          onClick={() => {
            setEventProperty("isCook");
            setCookButtonColor((currentColor) =>
              toggleColor(currentColor, "#a3a3a3")
            );
          }}
          style={{
            backgroundColor: cookButtonColor,
          }}
        >
          <PiCookingPot />
        </StyledIconButton>
      </Tooltip>

      <Tooltip title="Einkaufen" arrow>
        <StyledIconButton
          onClick={() => {
            setEventProperty("isBuyer");
            setBuyerButtonColor((currentColor) =>
              toggleColor(currentColor, "#a3a3a3")
            );
          }}
          style={{
            backgroundColor: buyerButtonColor,
          }}
        >
          <LuShoppingBasket />
        </StyledIconButton>
      </Tooltip>

      <Tooltip title="Organisieren" arrow>
        <StyledIconButton
          onClick={() => {
            setEventProperty("isOrganisator");
            setOrganizeButtonColor((currentColor) =>
              toggleColor(currentColor, "#a3a3a3")
            );
          }}
          style={{
            backgroundColor: organizeButtonColor,
          }}
        >
          <IoPersonOutline />
        </StyledIconButton>
      </Tooltip>
    </BasicModal>
  );
};

/*  
{element.participants.userName.map((participant) => (
        <div>{participant}</div>
      ))} 
*/
