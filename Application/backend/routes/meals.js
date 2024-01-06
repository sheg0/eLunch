const keycloak = require("../keycloak");
const express = require("express");

// Importing Functions
const {
  getAllMeals,
  getMeal,
  createMeal,
  deleteMeal,
  updateMeal,
  createTestMeal,
  UpdateBalance,
  //getAllUsers,
} = require("../controllers/mealController");

const router = express.Router();

// GET all meals
router.get("/", getAllMeals);

// GET single meal
router.get("/:id", getMeal);

// POST a new meal
router.post("/", createMeal);

// POST a new meal
router.post("/test", createTestMeal);

// DELETE a meal
router.delete("/:id", deleteMeal);

// UPDATE a new meal
router.patch("/:id", updateMeal);

//router.patch("/users", getAllUsers);

//router.post("/update-balance", keycloak.protect("realm:user"), UpdateBalance);

// Exporting Functions
module.exports = router;
