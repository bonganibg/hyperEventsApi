const { createEvent, updateEvent, getEvent, getEvents, deleteEvent } = require("../services/event.service");

exports.createEvent = async (req, res) => {
    const body = req.body;       
    const result = await createEvent(body);    

    if (result.success){
        res.status(203).json({
            message: "Created event",
            id: result.id
        })
    } else {
        res.status(400).json({
            message: result.error
        })
    }
}

exports.updateEvent = async (req, res) => {
    const body = req.body;
    body.id = req.params.id;
    const result = await updateEvent(body);

    if (result.success){
        res.status(203).json({
            message: "Updated event",
            id: result.id
        })
    } else {
        res.status(400).json({
            message: result.error
        })
    }
}

exports.getEvent = async (req, res) => {
    const id = req.params.id;
    const result = await getEvent(id);

    if (result.success){
        res.status(200).json({
            message: "Retrieved event",
            event: result.event
        })
    } else {
        res.status(400).json({
            message: result.error
        })
    }
}

exports.getEvents = async (req, res) => {
    const result = await getEvents();

    if (result.success){
        res.status(200).json({
            message: "Retrieved events",
            events: result.events
        })
    } else {
        res.status(400).json({
            message: result.error
        })
    }
}

exports.deleteEvent = async (req, res) => {
    const id = req.params.id;
    const result = await deleteEvent(id);

    if (result.success){
        res.status(203).json({
            message: "Deleted event",
            id: result.id
        })
    } else {
        res.status(400).json({
            message: result.error
        })
    }
}