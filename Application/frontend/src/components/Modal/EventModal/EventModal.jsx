import MealDropdown from "../../Dropdown/MealDropdown";
import { BasicModal } from "../BasicModal";
import { DateField } from "@mui/x-date-pickers/DateField";
import { useKeycloak } from "@react-keycloak/web";
import { useEventsContext } from "../../../hooks/useEventsContext";
import { useState } from "react";
import dayjs from "dayjs";
import StyledButton from "../../Styled_MUI_Components/StyledButton";
import StyledTimeField from "../../Styled_MUI_Components/StyledTimeField";
import StyledDateField from "../../Styled_MUI_Components/StyledDateField";
import "../ModalStyle.css";

export const EventModal = ({ isOpen, setIsOpen }) => {
  const [date, setDate] = useState(dayjs());
  const [mealId, setMealId] = useState("");
  const { keycloak } = useKeycloak();
  const { dispatch } = useEventsContext();

  const addEvent = async () => {
    console.log({
      date,
      mealId,
      userName: keycloak.tokenParsed.preferred_username,
    });

    const response = await fetch("/api/events/", {
      method: "POST",
      body: JSON.stringify({
        date,
        mealId,
        userName: keycloak.tokenParsed.preferred_username,
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
    date
      .set("hour", dayjs(newTime).hour())
      .set("minute", dayjs(newTime).minute())
      .set("second", dayjs(newTime).second());
  };

  return (
    <BasicModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h1 className="Modal-Header">Neues Gericht</h1>
      <div className="EventModal-Content">
        <div className="EventModal-Container">
          <h1 className="EventModal-Headlines">Datum</h1>

          <StyledDateField
            value={date}
            onChange={(newDate) => setDate(newDate)}
          ></StyledDateField>

          <StyledTimeField
            value={date}
            onChange={(newTime) => setTime(newTime)}
          ></StyledTimeField>
        </div>
        <div className="EventModal-Container">
          <h1 className="EventModal-Headlines">Gericht</h1>
          <MealDropdown setMealId={setMealId}></MealDropdown>
        </div>

        <StyledButton
          onClick={addEvent}
          className="EventModal-Button"
          sx={{
            bgcolor: "#043c5f",
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(3, 40, 63, 1)",
            },
          }}
        >
          Gericht hinzufügen
        </StyledButton>
      </div>
    </BasicModal>
  );
};
