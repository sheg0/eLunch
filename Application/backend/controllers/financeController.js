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

    finance.userInfo.balance = String(newBalance);
    await finance.save();

    res.status(200).json(finance);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
};

// neues objekt hinzufügen, nicht aktualiseiren wie in updateBalance
const addActivities = async (req, res) => {
  try {
    const userName = req.params.userName;
    const { amount, sign, description, sendTo, receivedFrom, date } = req.body;

    // Find the finance document by userName
    const finance = await Finance.findOne({ "userInfo.userName": userName });

    if (!finance) {
      return res.status(404).json({ error: "Finance record not found" });
    }

    // Add a new activity to the activities array
    finance.userInfo.activities.push({
      amount: amount,
      sign: sign,
      description: description,
      sendTo: sendTo,
      receivedFrom: receivedFrom,
      date: date,
    });

    // Save the updated finance document
    const updatedFinance = await finance.save();

    // Respond with the updated finance document
    res.json(updatedFinance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteActivities = async (req, res) => {
  try {
    const userName = req.params.userName;

    // Find the finance document by userName
    const finance = await Finance.findOne({ "userInfo.userName": userName });

    if (!finance) {
      return res.status(404).json({ error: "Finance record not found" });
    }

    // Set the activities array to an empty array
    finance.userInfo.activities = [];

    // Save the updated finance document
    const updatedFinance = await finance.save();

    // Respond with the updated finance document
    res.json(updatedFinance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = {
  getAllFinance,
  deleteAllFinances,
  createFinance,
  updateBalance,
  addActivities,
  deleteActivities,
  //deleteMeal,
  //updateMeal,
  //UpdateBalance,
};
