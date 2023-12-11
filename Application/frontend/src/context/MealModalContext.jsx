import { createContext, useState } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { useMealsContext } from "../hooks/useMealsContext";

export const MealListContext = createContext();

export const MealListProvider = ({ children }) => {
  const emptyMeal = {
    name: "",
    ingredients: "",
    description: "",
    timeNeeded: 0,
    category: "Hauptgericht",
    difficulty: "Mittel",
    isWithAlcohol: false,
    isLactoseFree: false,
    isGlutenFree: false,
    isWithMeat: false,
    isVegan: false,
    isVegetarian: false,
  };

  const { keycloak } = useKeycloak();
  const { dispatch } = useMealsContext();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [meal, setMeal] = useState(emptyMeal);

  const addMeal = async (meal) => {
    const response = await fetch("/api/meals/", {
      method: "POST",
      body: JSON.stringify({
        ...meal,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${keycloak.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "CREATE_MEAL", payload: json });
      setIsModalOpen(false);
      setIsAdding(false);
    }
  };

  const updateMeal = async (meal) => {
    console.log("inside Edit");
    const response = await fetch("/api/meals/" + meal._id, {
      method: "PATCH",
      body: JSON.stringify({
        ...meal,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${keycloak.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "EDIT_MEAL", payload: json });
      setIsModalOpen(false);
    }
  };

  const deleteMeal = async (meal) => {
    const response = await fetch("/api/meals/" + meal._id, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${keycloak.token}` },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_MEAL", payload: json });
    }
  };

  const handleClickEdit = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClickMealEdit = (meal) => {
    setMeal(meal);
    handleClickEdit();
  };

  const openAddMealModal = () => {
    setMeal(emptyMeal);
    setIsAdding(true);
    setIsModalOpen(true);
  };

  const submitMeal = (meal) => {
    if (isAdding) {
      addMeal(meal);
    } else {
      updateMeal(meal);
    }
  };

  const contextValue = {
    meal,
    setMeal,
    isAdding,
    isModalOpen,
    setIsModalOpen,
    addMeal,
    updateMeal,
    deleteMeal,
    handleClickMealEdit,
    openAddMealModal,
    submitMeal,
  };

  return (
    <MealListContext.Provider value={contextValue}>
      {children}
    </MealListContext.Provider>
  );
};
