const DateModel = require("./src/models/date.model");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true, dbName: "hyperEventTest" })
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

async function run(){
    const date = await DateModel.findById("6680fe8a007ead4cf422357e");
    const tickets = date.tickets.findIndex(t => t._id == "6681005de029bd79635d26d7");
    console.log(tickets)
}

run()