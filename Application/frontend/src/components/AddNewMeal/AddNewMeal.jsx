import React, { useState } from "react";
import "./AddNewMeal.css";
import Alcohol from "../../images/Alcohol.png";
import Dairyfree from "../../images/Dairyfree.png";
import Glutenfree from "../../images/Glutenfree.png";
import Meat from "../../images/Meat.png";
import Vegan from "../../images/Vegan.png";
import Veggie from "../../images/Veggie.png";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const initialInputs = ["", "", "", "", ""];
  const [inputs, setInputs] = useState(initialInputs);
  const [showInput, setShowInput] = useState(false);

  const placeholderTexts = [
    "Eintragen...",
    "Zutaten eintragen...",
    "Fließtext eintragen...",
    "Zeitaufwand eintragen...",
    "Schwierigkeit eintragen...",
  ];

  const [clickedImages, setClickedImages] = useState({
    Alcohol: false,
    Dairyfree: false,
    Glutenfree: false,
    Meat: false,
    Vegan: false,
    Veggie: false,
  });

  const handleClick = (imageKey) => {
    setClickedImages((prevClickedImages) => ({
      ...prevClickedImages,
      [imageKey]: !prevClickedImages[imageKey],
    }));
  };

  const stateOptions = [
    { value: "", label: "wählen..." },
    { value: "unbestimmt", label: "unbestimmt" },
    { value: "Vorspeise", label: "Vorspeise" },
    { value: "Hauptgericht", label: "Hauptgericht" },
    { value: "Beilage", label: "Beilage" },
    { value: "Nachtisch", label: "Nachtisch" },
    { value: "Snack", label: "Snack" },
    { value: "Extern", label: "Extern" },
    { value: "Besonderheit", label: "Besonderheit" },
    { value: "Rezept", label: "Rezept" },
    { value: "Aktivität", label: "Aktivität" },
  ];

  const stateLevels = [
    { value: "", label: "wählen..." },
    { value: "unbestimmt", label: "unbestimmt" },
    { value: "sehr einfach", label: "sehr einfach" },
    { value: "einfach", label: "einfach" },
    { value: "geht so", label: "geht so" },
    { value: "schwierig", label: "schwierig" },
    { value: "Chefkoch", label: "Chefkoch" },
  ];

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleInputChange = (event, index) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
    setShowInput(true);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="modal">
      <button className="btn-newMeal" onClick={toggleModal}>
        &#43; Neues Gericht hinzufügen
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="mealHeader">
              <h2>Neues Gericht hinzufügen</h2>
              <p className="newMealP">
                Name <br />
                Zutaten (pro Person) <br />
                Beschreibung <br />
                Zeitaufwand <br />
                Kosten (pro Person) <br />
                Kategorie <br />
                Schwierigkeit <br />
                Tags <br />
              </p>
            </div>

            <div className="inputField">
              {inputs.map((input, index) => (
                <div key={index}>
                  <input
                    className="mealText"
                    type="text"
                    placeholder={placeholderTexts[index]}
                    id={`input${index + 1}`}
                    value={input}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </div>
              ))}

              <select
                className="mealText"
                value={selectedState}
                onChange={handleStateChange}
              >
                {stateOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <select
                className="mealText"
                value={selectedLevel}
                onChange={handleLevelChange}
              >
                {stateLevels.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <div className="imageTags">
                <img
                  src={Alcohol}
                  alt="alcohol"
                  id="imgClicked"
                  className={clickedImages.Alcohol ? "" : "clicked"}
                  onClick={() => handleClick("Alcohol")}
                />
                <img
                  src={Dairyfree}
                  alt="dairyfree"
                  id="imgClicked"
                  className={clickedImages.Dairyfree ? "" : "clicked"}
                  onClick={() => handleClick("Dairyfree")}
                />
                <img
                  src={Glutenfree}
                  alt="Glutenfree"
                  id="imgClicked"
                  className={clickedImages.Glutenfree ? "" : "clicked"}
                  onClick={() => handleClick("Glutenfree")}
                />
                <img
                  src={Meat}
                  alt="Meat"
                  id="imgClicked"
                  className={clickedImages.Meat ? "" : "clicked"}
                  onClick={() => handleClick("Meat")}
                />
                <img
                  src={Vegan}
                  alt="Vegan"
                  id="imgClicked"
                  className={clickedImages.Vegan ? "" : "clicked"}
                  onClick={() => handleClick("Vegan")}
                />
                <img
                  src={Veggie}
                  alt="Veggie"
                  id="imgClicked"
                  className={clickedImages.Veggie ? "" : "clicked"}
                  onClick={() => handleClick("Veggie")}
                />{" "}
              </div>
              <div className="btnPos">
                <button className="btnMeal btn-newMeal" onClick={toggleModal}>
                  Bestätigen
                </button>
                <button className="btnMeal btn-newMeal" onClick={toggleModal}>
                  Abbrechen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
