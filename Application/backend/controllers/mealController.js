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
  const {
    name,
    ingredients,
    description,
    timeNeeded,
    cost,
    category,
    ...optionalProperties
  } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ error: "Meal: Name or Type is missing inside Request-body." });
  }

  try {
    const meal = await Meal.create({
      _id: new mongoose.Types.ObjectId(),
      name,
      ingredients,
      description,
      timeNeeded,
      cost,
      category,
      ...optionalProperties,
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
