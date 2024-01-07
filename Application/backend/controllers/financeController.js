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
const deleteAllFinances = async (req, res) => {
  try {
    const result = await Finance.deleteMany();
    res.json({ message: "All finance documents deleted successfully", result });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
};

const updateBalance = async (req, res) => {
  const userName = req.params.userName;
  const newBalance = req.body.newBalance;

  try {
    const finance = await Finance.findOne({ "userInfo.userName": userName });

    if (!finance) {
      return res.status(404).json({ error: "User not found" });
    }

    finance.userInfo.balance = newBalance;
    await finance.save();

    res.status(200).json(finance);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
};

module.exports = {
  getAllFinance,
  deleteAllFinances,
  createFinance,
  updateBalance,
  //deleteMeal,
  //updateMeal,
  //UpdateBalance,
};
