import { BasicModal } from "../BasicModal";
import TextField from "@mui/material/TextField";
export const EventDetailModal = ({ element, isOpen, setIsOpen }) => {
  let participants = [];
  console.log(element.participants);

  const toArray = () => {
    Object.keys(element.participants).forEach(function (key, index) {
      participants.push(element.participants[key]);
    });
    console.log(participants);
  };

  return (
    <BasicModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <TextField
        disabled
        id="outlined-disabled"
        label="Event Datum"
        value={element.date || "default"}
      ></TextField>
      <TextField
        disabled
        id="outlined-disabled"
        label="Meal"
        value={element.meal.name || "default"}
      ></TextField>

      {toArray()}
      {participants.map((participant, i) => (
        <>
          {i == 0 && <div>Zugesagt</div>}
          <TextField
            disabled
            id="outlined-disabled"
            value={participant.userName || "default"}
          ></TextField>
        </>
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
