// database
const mongoose = require("mongoose");

// create schema
const Schema = mongoose.Schema;

// define schema
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

// export schema
module.exports = mongoose.model("User", userSchema);
