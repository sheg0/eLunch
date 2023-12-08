import React, { useState } from "react";
import "./MealModal.css";
import Alcohol from "../../images/Alcohol.png";
import Dairyfree from "../../images/Dairyfree.png";
import Glutenfree from "../../images/Glutenfree.png";
import Meat from "../../images/Meat.png";
import Vegan from "../../images/Vegan.png";
import Veggie from "../../images/Veggie.png";
import { RxCross1 } from "react-icons/rx";
import { useEffect } from "react";

const MealModal = ({ setIsEditing, isEditing, submitEditing }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [inputs, setInputs] = useState([
    meal?.name,
    meal?.ingredients,
    meal?.description,
    meal?.timeNeeded,
    meal?.difficulty,
  ]);

  useEffect(() => {
    setInputs([
      meal?.name,
      meal?.ingredients,
      meal?.description,
      meal?.timeNeeded,
      meal?.difficulty,
    ]);

    setClickedImages({
      Alcohol: meal?.isWithAlcohol,
      Dairyfree: meal?.isLactoseFree,
      Glutenfree: meal?.isGlutenFree,
      Meat: meal?.isWithMeat,
      Vegan: meal?.isVegan,
      Veggie: meal?.isVegetarian,
    });

    setSelectedCategory(meal.category);
    setSelectedDifficulty(meal.difficulty);
  }, [meal]);

  const placeholderTexts = [
    "Eintragen...",
    "Zutaten eintragen...",
    "Fließtext eintragen...",
    "Zeitaufwand eintragen...",
    "Schwierigkeit eintragen...",
  ];

  const [clickedImages, setClickedImages] = useState({
    Alcohol: meal?.isWithAlcohol,
    Dairyfree: meal?.isLactoseFree,
    Glutenfree: meal?.isGlutenFree,
    Meat: meal?.isWithMeat,
    Vegan: meal?.isVegan,
    Veggie: meal?.isVegetarian,
  });

  const handleClick = (imageKey) => {
    console.log(meal);
    setClickedImages((prevClickedImages) => ({
      ...prevClickedImages,
      [imageKey]: !prevClickedImages[imageKey],
    }));
  };

  const stateOptions = [
    { value: "" },
    { value: "Vorspeise" },
    { value: "Hauptgericht" },
    { value: "Beilage" },
    { value: "Nachtisch" },
    { value: "Snack" },
    { value: "Extern" },
    { value: "Besonderheit" },
    { value: "Rezept" },
    { value: "Aktivität" },
  ];

  const stateLevels = [
    { value: "" },
    { value: "Sehr Einfach" },
    { value: "Einfach" },
    { value: "Mittel" },
    { value: "Schwierig" },
    { value: "Chefkoch" },
  ];

  const handleLevelChange = (event) => {
    setSelectedDifficulty(event.target.value);
  };

  const handleStateChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleInputChange = (event, index) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  const toggleModal = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="modal">
      {isEditing && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="mealHeader">
              <h2>Neues Gericht hinzufügen</h2>
              <button className="cross-icon btn-newMeal" onClick={toggleModal}>
                <RxCross1 />
              </button>
              <p className="newMealP">
                Name <br />
                Zutaten (pro Person) <br />
                Beschreibung <br />
                Zeitaufwand <br />
                Kosten (pro Person) <br />
                Kategorie <br />
                Schwierigkeit <br />
                Tags <br />
                <br />
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
                value={selectedCategory}
                onChange={handleStateChange}
              >
                {stateOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </select>
              <select
                className="mealText"
                value={selectedDifficulty}
                onChange={handleLevelChange}
              >
                {stateLevels.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
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
                <button
                  className="btnMeal btn-newMeal"
                  onClick={() => submitEditing({})}
                >
                  Bestätigen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealModal;
