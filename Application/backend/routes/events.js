const keycloak = require("../keycloak");
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

// GET all filtered events
router.get("/:from/:to", getFilteredEvents);

// GET all events
router.get("/", getAllEvents);

// GET single event
router.get("/:id", keycloak.protect("realm:user"), getEvent);

// DELETE an event
router.delete("/:id", keycloak.protect("realm:admin"), deleteEvent);

// POST a new event
router.post("/", keycloak.protect("realm:user"), createEvent);

// UPDATE an Event
router.patch("/:id", keycloak.protect("realm:user"), updateEvent);

module.exports = router;
