// database
const mongoose = require("mongoose");

// create schema
const Schema = mongoose.Schema;

// define schema
const mealSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true,
    },
    isVegetarian: {
      type: Boolean,
      default: false,
      required: false,
    },
    isVegan: {
      type: Boolean,
      default: false,
      required: false,
    },
    isWithMeat: {
      type: Boolean,
      default: false,
      required: false,
    },
    isWithAlcohol: {
      type: Boolean,
      default: false,
      required: false,
    },
    isGlutenFree: {
      type: Boolean,
      default: false,
      required: false,
    },
    isLactoseFree: {
      type: Boolean,
      default: false,
      required: false,
    },
    type: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
    },
  },

  {
    timestamps: true,
  }
);

// export schema
module.exports = mongoose.model("Meal", mealSchema);
