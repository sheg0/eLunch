const keycloak = require("../keycloak");
const express = require("express");

// Importing Functions
const {
  getAllMeals,
  getMeal,
  createMeal,
  deleteMeal,
  updateMeal,
} = require("../controllers/mealController");

const router = express.Router();

// GET weakly meals
// router.get('/week', '')

// GET monthly meals
// router.get('/month', '')

// GET all meals
router.get("/", keycloak.protect("realm:user"), getAllMeals);

// GET single meal
router.get("/:id", keycloak.protect("realm:user"), getMeal);

// POST a new meal
router.post("/", keycloak.protect("realm:admin"), createMeal);

// DELETE a meal
router.delete("/:id", keycloak.protect("realm:admin"), deleteMeal);

// UPDATE a new meal
router.patch("/:id", keycloak.protect("realm:admin"), updateMeal);

// Exporting Functions
module.exports = router;
