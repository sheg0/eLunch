import React, { useState } from "react";
import "./MealModal.css";

import { RxCross1 } from "react-icons/rx";
import { useEffect } from "react";

const MealModal = ({ mealProp, setIsEditing, isEditing, submitEditing }) => {
  const [meal, setMeal] = useState(mealProp);

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
          <div className="modal-content"></div>
        </div>
      )}
    </div>
  );
};

export default MealModal;
