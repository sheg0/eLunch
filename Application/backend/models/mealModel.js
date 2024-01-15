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
    ingredients: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    timeNeeded: {
      type: Number,
      min: 0,
      max: 200,
      required: true,
    },
    cost: {
      type: mongoose.Types.Decimal128,
      min: 0.0,
      max: 50.0,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Unbestimmt",
        "Vorspeise",
        "Hauptgericht",
        "Beilage",
        "Nachtisch",
        "Snack",
        "Extern",
        "Besonderheit",
        "Rezept",
        "Aktivität",
      ],
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["Unbestimmt", "Sehr Einfach", "Einfach", "Mittel", "Schwierig"],
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
  },

  {
    timestamps: true,
  }
);

// export schema
module.exports = mongoose.model("Meal", mealSchema);
