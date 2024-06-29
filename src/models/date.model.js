const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
    price: Number,
    type: String
});

const dateSchema = mongoose.Schema({
    tourId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tour"
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
    },
    date: {
        type: Date,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    tickets: [ticketSchema]
});

module.exports = mongoose.model("Date", dateSchema);