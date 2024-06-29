const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A tour must have a title"],
        maxLength: [40, "A tour title must have less or equal than 40 characters"],
        minLength: [10, "A tour title must have more or equal than 10 characters"]
    },
    subtitle: {
        type: String,
        required: [true, "A tour must have a subtitle"],
        maxLength: [40, "A tour subtitle must have less or equal than 40 characters"],
        minLength: [10, "A tour subtitle must have more or equal than 10 characters"]
    },
    shortDescription: {
        type: String,
        required: [true, "A tour must have a short description"],
        maxLength: [100, "A tour short description must have less or equal than 100 characters"],
        minLength: [20, "A tour short description must have more or equal than 20 characters"]
    },
    longDescription: {
        type: String,
        required: [true, "A tour must have a long description"],
        maxLength: [500, "A tour long description must have less or equal than 500 characters"],
        minLength: [50, "A tour long description must have more or equal than 50 characters"]
    },
    promoter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    events: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Event"
    }
});

module.exports = mongoose.model("Tour", tourSchema);
