import { BasicModal } from "../BasicModal";
import TextField from "@mui/material/TextField";
import "../ModalStyle.css";
export const EventDetailModal = ({ element, isOpen, setIsOpen }) => {
  let participants = [];
  console.log(element.participants);

  const toArray = () => {
    Object.keys(element.participants).forEach(function (key, index) {
      participants.push(element.participants[key]);
    });
    console.log(participants);
  };

  const dateOptions = ({ element }) => {
    const dateOptions = {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    };
  };

  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedDate = element.date
    ? new Date(element.date)
        .toLocaleDateString("de-DE", dateOptions)
        .replace(",", "-")
    : "default";

  const formattedTime = element.date
    ? new Date(element.date).toLocaleTimeString("de-DE", timeOptions)
    : "default";

  return (
    <BasicModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h1 className="Modal-Header">{formattedDate}</h1>
      <div className="EventModal-Container">
        <p className="Modal-Time">{formattedTime}</p>
        <p className="Modal-Meal">{element.meal.name || "default"}</p>
      </div>

      {toArray()}
      {participants.map((participant, i) => (
        <div>
          {i == 0 && <div className="EventDetail-Text">Zugesagt</div>}
          <div className="EventDetail-Fields">
            {participant.userName || "default"}
          </div>
        </div>
      ))}

      {participants
        .filter((participant) => participant.isCook)
        .map((participant, i) => (
          <div key={i}>
            {i == 0 && <div>Kochen</div>}
            <TextField
              disabled
              id="outlined-disabled"
              value={participant.userName}
            />
          </div>
        ))}

      {participants
        .filter((participant) => participant.isCreator)
        .map((participant, i) => (
          <div key={i}>
            {i == 0 && <div>Organisation</div>}
            <TextField
              disabled
              id="outlined-disabled"
              value={participant.userName}
            />
          </div>
        ))}

      {participants
        .filter((participant) => participant.isBuyer)
        .map((participant, i) => (
          <div key={i}>
            {i == 0 && <div>Einkaufer</div>}
            <TextField
              disabled
              id="outlined-disabled"
              value={participant.userName}
            />
          </div>
        ))}
    </BasicModal>
  );
};

/*  
{element.participants.userName.map((participant) => (
        <div>{participant}</div>
      ))} 
*/
