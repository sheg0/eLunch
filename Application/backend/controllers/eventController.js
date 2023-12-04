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
    let { from, to } = req.params;

    if (!from || !to) {
      res
        .status(400)
        .json({ error: "Did not provide both year and month as parameters." });
    }

    from = new Date(from);
    to = new Date(to);

    console.log(from);
    console.log(to);

    const events = await Event.find({
      date: {
        $gte: from,
        $lte: to,
      },
    });
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

      const { date, mealId, ...participantInfo } = req.body;

      const event = new Event({
        _id: new mongoose.Types.ObjectId(),
        date: new Date(date),
        meal: mealId,
        participants: [
          {
            ...participantInfo,
          },
        ],
      });
      return event.save();
    })
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Event stored",
        createdEvent: {
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

// Subscribe Event
const subscribeEvent = async (req, res) => {
  const { event } = req.body;
};

const unsubscribeEvent = async (req, res) => {
  const { event } = req.body;
};

const validateId = async (req, res, next) => {
  const { id, user } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Event" });
  }

  next();
};

module.exports = {
  getAllEvents,
  getFilteredEvents,
  getEvent,
  createEvent,
  deleteEvent,
  updateEvent,
};
