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
      required: true,
    },
    isVegan: {
      type: Boolean,
      required: true,
    },
    hasGluten: {
      type: Boolean,
      required: true,
    },

    isWithMeat: {
      type: Boolean,
      required: false,
    },
    isWithAlcohol: {
      type: Boolean,
      required: false,
    },
    isGlutenFree: {
      type: Boolean,
      required: false,
    },
    isLactoseFree: {
      type: Boolean,
      required: false,
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
