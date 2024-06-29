const EventModel = require("../../src/models/event.model");
const DateModel = require("../../src/models/date.model");

async function createEvent(eventDetails){

    if (eventDetails.tourId == undefined)
        return {success: false, error: "Tour ID is required"}

    try{
        const event = await EventModel.create(eventDetails);
        return {
            success: true,
            id: event._id
        }
    } catch(error){
        return {
            success: false,
            error: error.message
        }
    }
}

async function updateEvent(eventDetails){
    if (eventDetails.id == undefined)
        return {
            success: false,
            error: "Event ID is required"
        }

    try{
        const event = await EventModel.findByIdAndUpdate(eventDetails.id, eventDetails, { new: true });
        return {
            success: true,
            event: event
        }
    } catch (err){
        return {
            success: false,
            error: err.message
        }
    }
}


async function getEvent(id){
    try{
        const event = await EventModel.findById(id);
        return {
            success: true,
            event: event
        }
    } catch (err){
        return {
            success: false,
            error: err.message
        }
    }
}

async function getEvents(){
    try{
        const events = await EventModel.find();
        return {
            success: true,
            events: events
        }
    } catch (err){
        return {
            success: false,
            error: err.message
        }
    }
}

async function deleteEvent(id){
    try{
        const event = await EventModel.findByIdAndDelete(id);
        await DateModel.deleteMany({eventId: id});


        return {
            success: true,
            event: event
        }
    } catch (err){
        return {
            success: false,
            error: err.message
        }
    }
}



module.exports = {
    createEvent,
    updateEvent,
    getEvent,
    getEvents,
    deleteEvent
}