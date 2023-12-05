import React, { useState } from "react";
import "./AddMeal.css";
import { RxCross1 } from "react-icons/rx";

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
              <button className="crossIcon" onClick={toggleModal}>
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
              <input type="text" className="infoText" />
              <input type="text" className="infoText" />
              <input type="text" className="infoText" />
            </div>
            <div className="btnContainer">
              <button className="btnMeal btn-newMeal" onClick={toggleModal}>
                Bestätigen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddMeal;
