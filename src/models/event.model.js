const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  tourId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tour",
  },
  location: {
    type: String,
    required: [true, "An event must have a location"],
    minLength: [
      3,
      "An event location must have more or equal than 3 characters",
    ],
    maxLength: [
      40,
      "An event location must have less or equal than 40 characters",
    ],
  },
  dates: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Date",
  },
});

module.exports = mongoose.model("Event", eventSchema);
