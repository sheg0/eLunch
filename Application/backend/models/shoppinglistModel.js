// database
const mongoose = require("mongoose");

// create schema
const Schema = mongoose.Schema;

// define schema
const shoppinglistSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    id: {
      type: Number,
      required: true,
    },
    article: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: false,
    },
    status: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  {
    timestamps: true,
  }
);

// export schema
module.exports = mongoose.model("Shoppinglist", shoppinglistSchema);
