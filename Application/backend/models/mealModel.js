// database
const mongoose = require('mongoose');

// create schema
const Schema = mongoose.Schema;

// define schema
const mealSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        isVegetarian: {
            type: Boolean,
            required: true
        },
        isVegan: {
            type: Boolean,
            required: true
        },
        hasGluten: {
            type: Boolean,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    },
    
    {
        timestamps: true
    })

// export schema
module.exports = mongoose.model('Meal', mealSchema);  