const Finance = require("../models/financeModel");

const mongoose = require("mongoose");

const getAllFinance = async (req, res) => {
  const finance = await Finance.find({}).sort({ createdAt: -1 });
  res.status(200).json(finance);
};

// Create new meal
const createFinance = async (req, res) => {
  const {
    userInfo: { userName, firstName, lastName, balance, activities },
  } = req.body;

  try {
    const finance = await Finance.create({
      _id: new mongoose.Types.ObjectId(),
      userInfo: { userName, firstName, lastName, balance, activities },
    });
    res.status(200).json(finance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllFinance,
  //getMeal,
  createFinance,
  //deleteMeal,
  //updateMeal,
  //UpdateBalance,
};
