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

export const EventModal = ({ isOpen, setIsOpen, event, dates }) => {
  const [mealId, setMealId] = useState("");
  const { keycloak } = useKeycloak();
  const { dispatch } = useEventsContext();
  const [date, setDate] = useState(dayjs());
  const [note, setNote] = useState("");
  const [meal, setMealBack] = useState();
  const [editedMealInfo, setEditedMealInfo] = useState({});

  const handleMealSelect = async (selectedMealId) => {
    const response = await fetch(`/api/meals/${selectedMealId}`);
    const mealData = await response.json();

    setMealInfo({
      isVegetarian: mealData.isVegetarian,
      isVegan: mealData.isVegan,
      isWithMeat: mealData.isWithMeat,
      isWithAlcohol: mealData.isWithAlcohol,
      isGlutenFree: mealData.isGlutenFree,
      isLactoseFree: mealData.isLactoseFree,
    });
  };

  const updateEditedMealInfo = (key, value) => {
    setEditedMealInfo((prevInfo) => ({
      ...prevInfo,
      [key]: value,
    }));
  };

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

  console.log("mealback ", event.mealInfo);
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
          <MealDropdown
            setMealBack={setMealBack}
            setMealId={setMealId}
          ></MealDropdown>
        </div>

        <div className="EventModal-Container">
          <h1 className="EventModal-Headlines">Anmerkung</h1>
          <TextField
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
          ></TextField>
        </div>

        <div>
          <FormControlLabel
            control={
              <Switch
                checked={mealInfo.isVegetarian}
                onChange={() =>
                  setMealInfo((prevInfo) => ({
                    ...prevInfo,
                    isVegetarian: !prevInfo.isVegetarian,
                  }))
                }
              />
            }
            label="Vegetarisch"
          />

          <FormControlLabel
            control={
              <Switch
                checked={mealInfo.isVegan}
                onChange={() =>
                  setMealInfo((prevInfo) => ({
                    ...prevInfo,
                    isVegan: !prevInfo.isVegan,
                  }))
                }
              />
            }
            label="Vegan"
          />
          <FormControlLabel
            control={
              <Switch
                checked={mealInfo.isWithMeat}
                onChange={() =>
                  setMealInfo((prevInfo) => ({
                    ...prevInfo,
                    isWithMeat: !prevInfo.isWithMeat,
                  }))
                }
              />
            }
            label="isWithMeat"
          />
          <FormControlLabel
            control={
              <Switch
                checked={mealInfo.isWithAlcohol}
                onChange={() =>
                  setMealInfo((prevInfo) => ({
                    ...prevInfo,
                    isWithAlcohol: !prevInfo.isWithAlcohol,
                  }))
                }
              />
            }
            label="isWithAlcohol"
          />
          <FormControlLabel
            control={
              <Switch
                checked={mealInfo.isGlutenFree}
                onChange={() =>
                  setMealInfo((prevInfo) => ({
                    ...prevInfo,
                    isGlutenFree: !prevInfo.isGlutenFree,
                  }))
                }
              />
            }
            label="isGlutenFree"
          />
          <FormControlLabel
            control={
              <Switch
                checked={mealInfo.isLactoseFree}
                onChange={() =>
                  setMealInfo((prevInfo) => ({
                    ...prevInfo,
                    isLactoseFree: !prevInfo.isLactoseFree,
                  }))
                }
              />
            }
            label="isLactoseFree"
          />
        </div>

        <button onClick={addEvent} className="EventModal-Button">
          Gericht hinzufügen
        </button>
      </div>
    </BasicModal>
  );
};
