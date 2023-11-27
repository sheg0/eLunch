const mongoose = require("mongoose");
const Event = require("../models/eventModel.js");
const Meal = require("../models/mealModel.js");

// GET all Event
const getAllEvents = async (req, res) => {
  const event = await Event.find()
    .sort({ createdAt: -1 })
    .populate("meal")
    .exec();
  res.status(200).json(event);
};

const getFilteredEvents = async (req, res) => {
  try {
    // Extract the month from the request parameters
    //----------------------------------------------
    let { requestedMonth, requestedYear } = req.params;

    if (!requestedMonth || !requestedYear) {
      res
        .status(400)
        .json({ error: "Did not provide both year and month as parameters." });
    }

    requestedMonth = parseInt(requestedMonth);
    requestedYear = parseInt(requestedYear);

    const events = await Event.aggregate([
      {
        $project: {
          year: { $year: "$_id" },
          month: { $month: "$_id" },
        },
      },
      {
        $match: {
          year: requestedYear,
          month: requestedMonth,
        },
      },
    ]);

    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
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
      /*
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
      */
      const { userName, role, isCreator, isCook, isBuyer, isIdle } = req.body; //participants: participants,

      const event = new Event({
        _id: new mongoose.Types.ObjectId(),
        date: req.body.date,
        meal: req.body.mealId,
        participants: [
          {
            userName,
            role,
            isCreator,
            isCook,
            isBuyer,
            isIdle,
          },
        ],
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

// delete an Event
const deleteEvent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Event" });
  }
  const event = await Event.findOneAndDelete({ _id: id }); // the id proptery in mongo is _id
  if (!event) {
    return res.status(404).json({ error: "No Such Event" });
  }
  res.status(200).json(event);
};

// Update an Event

const updateEvent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Event" });
  }

  const event = await Event.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    { new: true }
  );

  if (!event) {
    return res.status(404).json({ error: "No Such Event" });
  }

  res.status(200).json(event);
};

module.exports = {
  getAllEvents,
  getFilteredEvents,
  getEvent,
  createEvent,
  deleteEvent,
  updateEvent,
};
