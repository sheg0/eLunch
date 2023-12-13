import React, { useState } from "react";
import "./AddEvent.css";
import { RxCross1 } from "react-icons/rx";
import MealsDropdown from "../Dropdown/MealsDropdown";
import { useKeycloak } from "@react-keycloak/web";
import { useEventsContext } from "../../hooks/useEventsContext";

function AddEvent() {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState("");
  const [mealId, setMealId] = useState();
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

  return (
    <div>
      <button className="addMeal-button" onClick={() => setIsOpen(!isOpen)}>
        &#43; Neues Event
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div>
              <h2>Neues Event</h2>
              <button className="crossIcon" onClick={() => setIsOpen(!isOpen)}>
                <RxCross1 />
              </button>
              <p>
                Datum <br />
                Gericht <br />
                Anmerkung <br />
                Tags <br />
                <br />
              </p>
            </div>
            <div className="inputText">
              <input
                onChange={(e) => setDate(e.target.value)}
                type="text"
                className="infoText"
              />
              <MealsDropdown setMealId={setMealId} />
              <input type="text" className="infoText" />
            </div>
            <div className="btnContainer">
              <button className="btnMeal btn-newMeal" onClick={addEvent}>
                Bestätigen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddEvent;
