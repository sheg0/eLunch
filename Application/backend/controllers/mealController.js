const Meal = require("../models/mealModel");
const mongoose = require("mongoose");

// GET weakly meals
// GET monthly meals

// Sorting by descending order (1 for ascending)
// GET all meals
const getAllMeals = async (req, res) => {
  const meal = await Meal.find({}).sort({ createdAt: -1 });
  res.status(200).json(meal);
};

// GET single meal
const getMeal = async (req, res) => {
  const { id } = req.params; //'/:id' from the path of the request
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Meal" });
  }
  const meal = await Meal.findById(id);
  if (!meal) {
    return res.status(404).json({ error: "No Such Meal" });
  }
  res.status(200).json(meal);
};

// Create new meal
const createMeal = async (req, res) => {
  const { name, isVegetarian, isVegan, hasGluten, type, checked } = req.body;

  //Detecting which fields are empty
  let emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }
  if (!isVegetarian) {
    emptyFields.push("isVegetarian");
  }
  if (!isVegan) {
    emptyFields.push("isVegan");
  }
  if (!hasGluten) {
    emptyFields.push("hasGluten");
  }
  if (!type) {
    emptyFields.push("type");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  try {
    const meal = await Meal.create({
      name,
      isVegetarian,
      isVegan,
      hasGluten,
      type,
      checked,
    });
    res.status(200).json(meal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a  meal
const deleteMeal = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Meal" });
  }
  const meal = await Meal.findOneAndDelete({ _id: id }); // the id proptery in mongo is _id
  if (!meal) {
    return res.status(404).json({ error: "No Such Meal" });
  }
  res.status(200).json(meal);
};

// Update a  meal
const updateMeal = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Meal" });
  }

  const meal = await Meal.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    { new: true }
  );

  if (!meal) {
    return res.status(404).json({ error: "No Such Meal" });
  }

  res.status(200).json(meal);
};

module.exports = {
  getAllMeals,
  getMeal,
  createMeal,
  deleteMeal,
  updateMeal,
};
