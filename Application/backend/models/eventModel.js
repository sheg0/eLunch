// database
const mongoose = require("mongoose");

// create schema
const Schema = mongoose.Schema;

// define schema
const eventSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    date: {
      type: String,
      required: true,
    },
    meal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Meal",
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

// export schema
module.exports = mongoose.model("Event", eventSchema);
