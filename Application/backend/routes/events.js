const express = require("express");

const {
  getAllEvents,
  getFilteredEvents,
  getEvent,
  createEvent,
  deleteEvent,
  updateEvent,
} = require("../controllers/eventController");

const router = express.Router();

// GET all events
router.get("/", getAllEvents);

router.get("/:year/:month", getFilteredEvents);

// GET all eventUser
//router.get("/", getAllEventUser);

// GET single event
router.get("/:id", getEvent);

// DELETE an event
router.delete("/:id", deleteEvent);

// POST a new event
router.post("/", createEvent);

// UPDATE an Event
router.patch("/:id", updateEvent);

module.exports = router;
