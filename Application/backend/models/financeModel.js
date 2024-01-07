// database
const mongoose = require("mongoose");

// create schema
const Schema = mongoose.Schema;

const financeSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,

    userInfo: {
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
      activities: [],
      balance: {
        type: mongoose.Types.Decimal128,
        required: true,
      },
    },
  },

  {
    timestamps: true,
  }
);

// export schema
module.exports = mongoose.model("Finance", financeSchema);
