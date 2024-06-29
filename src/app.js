const express = require("express");
const process = require("process")
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "hyperEvent" })
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const tourRoute = require("./routes/tour.route");
const eventRoute = require("./routes/event.route");
const dateRoute = require("./routes/date.route");
app.use("/tours", tourRoute);
app.use("/events", eventRoute);
app.use("/dates", dateRoute);

module.exports = app;