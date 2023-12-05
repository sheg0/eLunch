import React, { useState } from "react";
import "./AddMeal.css";

function AddMeal() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="addMeal-button" onClick={toggleModal}>
        &#43; Neues Gericht
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div>
              <h2>Neues Gericht</h2>
              <p>
                Datum <br />
                Gericht <br />
                Anmerkung <br />
                Tags <br />
              </p>
            </div>
            <div className="inputText">
              <input type="text" className="infoText" />
              <input type="text" className="infoText" />
              <input type="text" className="infoText" />
            </div>
            <button className="btnMeal btn-newMeal" onClick={toggleModal}>
              Bestätigen
            </button>
            <button className="btnMeal btn-newMeal" onClick={toggleModal}>
              Abbrechen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddMeal;
