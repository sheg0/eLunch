const express = require("express");

const {
  getAllEvents,
  getEvent,
  createEvent,
  deleteEvent,
} = require("../controllers/eventController");

const router = express.Router();

// GET all events
router.get("/", getAllEvents);

// GET all eventUser
//router.get("/", getAllEventUser);

// GET single event
router.get("/:id", getEvent);

// DELETE an event
router.delete("/:id", deleteEvent);

// POST a new event
router.post("/", createEvent);

module.exports = router;
