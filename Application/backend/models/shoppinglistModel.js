// database
const mongoose = require("mongoose");

// create schema
const Schema = mongoose.Schema;

// define schema
const shoppinglistSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    article: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: false,
    },
  },


  {
    timestamps: true,
  }
);

// export schema
module.exports = mongoose.model("Shoppinglist", shoppinglistSchema);