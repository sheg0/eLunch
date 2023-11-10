// database
const mongoose = require("mongoose");

// create schema
const Schema = mongoose.Schema;

// define schema
const roleSchema = new Schema(
  {
    role: {
      type: Date,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

// export schema
module.exports = mongoose.model("Role", roleSchema);
