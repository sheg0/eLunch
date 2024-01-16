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
      activities: [
        {
          amount: {
            type: Number,
            required: false,
          },
          sign: {
            type: String,
            required: false,
          },
          description: {
            type: String,
            required: false,
          },
          sendTo: {
            type: String,
            required: false,
          },
          receivedFrom: {
            type: String,
            required: false,
          },
          date: {
            type: Date,
            required: false,
          },
        },
      ],
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
