// database
const mongoose = require("mongoose");

// create schema
const Schema = mongoose.Schema;

// define schema
const eventSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    meal: {
      type: Date,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

// export schema
module.exports = mongoose.model("Event", eventSchema);
