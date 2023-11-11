const express = require("express");

const {
  getAllEvents,
  getEvent,
  createEvent,
} = require("../controllers/eventController");

const router = express.Router();

// GET all events
router.get("/", getAllEvents);

// GET all eventUser
//router.get("/", getAllEventUser);

// GET single event
router.get("/:id", getEvent);

// POST a new meal
router.post("/", createEvent);

module.exports = router;
