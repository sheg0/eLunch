const mongoose = require("mongoose");
const Event = require("../models/eventModel.js");
const Meal = require("../models/mealModel.js");

// Sorting by descending order (1 for ascending)
// GET all Event
const getAllEvents = async (req, res) => {
  const event = await Event.find()
    .sort({ createdAt: -1 })
    .populate("meal")
    .exec();
  res.status(200).json(event);
};

// GET single Event
const getEvent = async (req, res) => {
  const { id } = req.params; //'/:id' from the path of the request
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Event" });
  }
  const event = await Event.findById(id).populate("meal").exec();
  if (!event) {
    return res.status(404).json({ error: "No Such Event" });
  }
  res.status(200).json(event);
};

const createEvent = (req, res) => {
  Meal.findById(req.body.mealId)
    .then((meal) => {
      if (!meal) {
        return res.status(404).json({
          message: "Meal not found",
        });
      }
      const participants = [
        {
          userName: "kaan",
          isCreator: true,
        },
        {
          userName: "Selim",
          isCreator: true,
        },
      ];

      const event = new Event({
        _id: new mongoose.Types.ObjectId(),
        date: req.body.date,
        meal: req.body.mealId,
        participants: participants,
      });
      return event.save();
    })
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Order stored",
        createdOrder: {
          _id: result._id,
          date: result.date,
          meal: result.meal,
          participants: [result.participants],
        },
        request: {
          type: "GET",
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

module.exports = {
  getAllEvents,
  getEvent,
  createEvent,
};
