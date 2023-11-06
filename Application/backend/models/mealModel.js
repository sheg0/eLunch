// database
const mongoose = require("mongoose");

// create schema
const Schema = mongoose.Schema;

// define schema
const mealSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isVegetarian: {
      type: String,
      required: true,
    },
    isVegan: {
      type: String,
      required: true,
    },
    hasGluten: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

// export schema
module.exports = mongoose.model("Meal", mealSchema);
