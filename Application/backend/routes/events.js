const keycloak = require("../keycloak");
const express = require("express");

const {
  getAllEvents,
  getFilteredEvents,
  getEvent,
  createEvent,
  deleteEvent,
  updateEvent,
  subscribeEvent,
  unsubscribeEvent,
  validateId,
  deleteAllEvents,
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

// DELETE all event
router.delete("/", deleteAllEvents);

// POST a new event
router.post("/", createEvent);

// UPDATE an Event
router.patch("/:id", validateId, updateEvent);
router.patch(
  "/subscribe/:id",
  /*keycloak.protect("realm:user"),*/
  validateId,
  subscribeEvent
);
router.patch(
  "/unsubscribe/:id",
  /*keycloak.protect("realm:user"),*/
  validateId,
  unsubscribeEvent
);

module.exports = router;
