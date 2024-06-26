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
import { Switch, FormControlLabel, TextField, Button } from "@mui/material";
import Alcohol from "../../../images/Alcohol.png";
import Dairyfree from "../../../images/Dairyfree.png";
import Glutenfree from "../../../images/Glutenfree.png";
import Meat from "../../../images/Meat.png";
import Vegan from "../../../images/Vegan.png";
import Veggie from "../../../images/Veggie.png";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

export const EventModal = ({ isOpen, setIsOpen, event, dates }) => {
  const [mealId, setMealId] = useState("");
  const { keycloak } = useKeycloak();
  const { dispatch } = useEventsContext();
  const [date, setDate] = useState(dayjs());
  const [note, setNote] = useState("");
  const [meal, setMealBack] = useState();
  const [editedMealInfo, setEditedMealInfo] = useState({});
  const [checked, setChecked] = useState(false);

  const [mealInfo, setMealInfo] = useState({
    isVegetarian: false,
    isVegan: false,
    isWithMeat: false,
    isWithAlcohol: false,
    isGlutenFree: false,
    isLactoseFree: false,
  });

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
      note,
      userName: keycloak.tokenParsed.preferred_username,
      mealInfo,
    });

    const response = await fetch("/api/events/", {
      method: "POST",
      body: JSON.stringify({
        date: date,
        mealId,
        note,
        userName: keycloak.tokenParsed.preferred_username,
        firstName: keycloak.tokenParsed.given_name,
        lastName: keycloak.tokenParsed.family_name,
        isCreator: true,
        mealInfo,
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

  //console.log("mealback ", event.mealInfo);
  return (
    <BasicModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h1 className="Modal-Header">Neues Gericht - {formattedDate}</h1>

      <div className="MealInput-Container">
        <div className="MealInput-Name">
          <p>Uhrzeit</p>
          <StyledTimeField
            value={date}
            onChange={(newTime) => {
              setTime(newTime);
            }}
          ></StyledTimeField>
        </div>
        <div className="MealInput-Name">
          <p>Gericht</p>
          <MealDropdown
            setMealBack={setMealBack}
            setMealId={setMealId}
          ></MealDropdown>
        </div>

        <div className="MealInput-Name">
          <p>Anmerkung</p>
          <TextField
            multiline
            rows={1}
            sx={{ minWidth: "45vh" }}
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
          ></TextField>
        </div>

        <div className="EventModal-TAGS">
          <Tooltip title="Vegetarisch" arrow>
            <FormControlLabel
              control={
                <Checkbox
                  checked={mealInfo.isVegetarian}
                  onChange={() => {
                    setMealInfo((prevInfo) => ({
                      ...prevInfo,
                      isVegetarian: !prevInfo.isVegetarian,
                    }));
                  }}
                  icon={
                    <img
                      src={Veggie}
                      alt="Veggie"
                      style={{ filter: "grayscale(100%)" }}
                    />
                  }
                  checkedIcon={
                    <img src={Veggie} alt="Veggie" style={{ filter: "none" }} />
                  }
                ></Checkbox>
              }
            />
          </Tooltip>

          <FormControlLabel
            control={
              <Checkbox
                checked={mealInfo.isVegan}
                onChange={() =>
                  setMealInfo((prevInfo) => ({
                    ...prevInfo,
                    isVegan: !prevInfo.isVegan,
                  }))
                }
                icon={
                  <img
                    src={Vegan}
                    alt="Vegan"
                    style={{ filter: "grayscale(100%)" }}
                  />
                }
                checkedIcon={
                  <img src={Vegan} alt="Vegan" style={{ filter: "none" }} />
                }
              />
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={mealInfo.isWithMeat}
                onChange={() =>
                  setMealInfo((prevInfo) => ({
                    ...prevInfo,
                    isWithMeat: !prevInfo.isWithMeat,
                  }))
                }
                icon={
                  <img
                    src={Meat}
                    alt="Meat"
                    style={{ filter: "grayscale(100%)" }}
                  />
                }
                checkedIcon={
                  <img src={Meat} alt="Meat" style={{ filter: "none" }} />
                }
              />
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={mealInfo.isWithAlcohol}
                onChange={() =>
                  setMealInfo((prevInfo) => ({
                    ...prevInfo,
                    isWithAlcohol: !prevInfo.isWithAlcohol,
                  }))
                }
                icon={
                  <img
                    src={Alcohol}
                    alt="Alcohol"
                    style={{ filter: "grayscale(100%)" }}
                  />
                }
                checkedIcon={
                  <img src={Alcohol} alt="Alcohol" style={{ filter: "none" }} />
                }
              />
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={mealInfo.isGlutenFree}
                onChange={() =>
                  setMealInfo((prevInfo) => ({
                    ...prevInfo,
                    isGlutenFree: !prevInfo.isGlutenFree,
                  }))
                }
                icon={
                  <img
                    src={Glutenfree}
                    alt="Glutenfree"
                    style={{ filter: "grayscale(100%)" }}
                  />
                }
                checkedIcon={
                  <img
                    src={Glutenfree}
                    alt="Glutenfree"
                    style={{ filter: "none" }}
                  />
                }
              />
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={mealInfo.isLactoseFree}
                onChange={() =>
                  setMealInfo((prevInfo) => ({
                    ...prevInfo,
                    isLactoseFree: !prevInfo.isLactoseFree,
                  }))
                }
                icon={
                  <img
                    src={Dairyfree}
                    alt="Dairyfree"
                    style={{ filter: "grayscale(100%)" }}
                  />
                }
                checkedIcon={
                  <img
                    src={Dairyfree}
                    alt="Dairyfree"
                    style={{ filter: "none" }}
                  />
                }
              />
            }
          />
        </div>

        <button onClick={addEvent} className="EventModal-Button">
          Gericht hinzufügen
        </button>
      </div>
    </BasicModal>
  );
};
