const express = require('express');

// Importing Functions

const { 
    getAllMeals,
    getMeal,
    createMeal,
    deleteMeal,
    updateMeal
} = require('../controllers/mealController');


const router = express.Router();

// GET all meals
router.get('/', getAllMeals)

// GET single meal
router.get('/:id', getMeal);

// POST a new meal
router.post('/', createMeal );

// DELETE a meal
router.delete('/:id', deleteMeal);

// UPDATE a new meal
router.patch('/:id', updateMeal);


// Exporting Functions
module.exports = router;
