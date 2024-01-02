// database
const mongoose = require("mongoose");

// create schema
const Schema = mongoose.Schema;

// define schema
const eventSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    date: {
      type: Date,
      required: true,
    },
    meal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Meal",
      required: true,
    },
    participants: [
      {
        userName: {
          type: String,
          required: true,
        },
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
        isCreator: {
          type: Boolean,
          default: false,
        },
        isCook: {
          type: Boolean,
          default: false,
        },
        isBuyer: {
          type: Boolean,
          default: false,
        },
        isOrganisator: {
          type: Boolean,
          default: false,
        },
        isIdle: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },

  {
    timestamps: true,
  }
);

// export schema
module.exports = mongoose.model("Event", eventSchema);
