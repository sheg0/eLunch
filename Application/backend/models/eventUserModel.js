// database
const mongoose = require("mongoose");

// create schema
const Schema = mongoose.Schema;

// define schema
const eventUserSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    mealId: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

// export schema
module.exports = mongoose.model("EventUser", eventUserSchema);
