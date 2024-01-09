import MealDropdown from "../../Dropdown/MealDropdown";
import { BasicModal } from "../BasicModal";
import { DateField } from "@mui/x-date-pickers/DateField";
import { useKeycloak } from "@react-keycloak/web";
import { useEventsContext } from "../../../hooks/useEventsContext";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import StyledButton from "../../Styled_MUI_Components/StyledButton";
import StyledTimeField from "../../Styled_MUI_Components/StyledTimeField";
import StyledDateField from "../../Styled_MUI_Components/StyledDateField";
import "../ModalStyle.css";
import { TextField } from "@mui/material";

export const EventModal = ({ isOpen, setIsOpen, event, dates }) => {
  const [mealId, setMealId] = useState("");
  const { keycloak } = useKeycloak();
  const { dispatch } = useEventsContext();
  const [date, setDate] = useState(dayjs());
  //let date = dayjs(dates);
  //console.log("dates: ", dates);
  //console.log("date: ", date);

  const dateObject = new Date(dates);
  const formattedDate = dateObject.toLocaleDateString("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  useEffect(() => {
    // Update the date when 'dates' prop changes
    setDate(dayjs(dates));
  }, [dates]);

  const addEvent = async () => {
    console.log({
      date,
      mealId,
      userName: keycloak.tokenParsed.preferred_username,
    });

    const response = await fetch("/api/events/", {
      method: "POST",
      body: JSON.stringify({
        date: date,
        mealId,
        userName: keycloak.tokenParsed.preferred_username,
        firstName: keycloak.tokenParsed.given_name,
        lastName: keycloak.tokenParsed.family_name,
        isCreator: true,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${keycloak.token}`,
      },
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "CREATE_EVENT", payload: json });
      setIsOpen(!isOpen);
    }
  };

  const setTime = (newTime) => {
    setDate((prevDate) =>
      prevDate
        .set("hour", dayjs(newTime).hour())
        .set("minute", dayjs(newTime).minute())
        .set("second", dayjs(newTime).second())
    );
  };
  return (
    <BasicModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h1 className="Modal-Header">Neues Gericht - {formattedDate}</h1>
      <div className="EventModal-Content">
        <div className="EventModal-Container">
          <h1 className="EventModal-Headlines">Uhrzeit</h1>

          <StyledTimeField
            value={date}
            onChange={(newTime) => {
              setTime(newTime);
            }}
          ></StyledTimeField>
        </div>
        <div className="EventModal-Container">
          <h1 className="EventModal-Headlines">Gericht</h1>
          <MealDropdown setMealId={setMealId}></MealDropdown>
        </div>

        <div className="EventModal-Container">
          <h1 className="EventModal-Headlines">Anmerkung</h1>
          <TextField></TextField>
        </div>

        <button onClick={addEvent} className="EventModal-Button">
          Gericht hinzufügen
        </button>
      </div>
    </BasicModal>
  );
};