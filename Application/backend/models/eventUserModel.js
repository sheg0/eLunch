const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

let eventUserSchema = new Schema({
  username: {
    type: String,
  },
  event: {
    type: ObjectId,
    ref: "Event", // Reference to some EventSchema
  },
});

// export schema
module.exports = mongoose.model("EventUser", eventUserSchema);
