const DateModel = require("../models/date.model");

async function createDate(dateBody){
    if (dateBody.eventId == undefined || dateBody.tourId == undefined)
        return {success: false, error: "tourID/eventId is required"}

    try{
        const date = await DateModel.create(dateBody);        
        return {
            success: true,
            id: date._id
        }
    } catch(err){
        return {
            success: false,
            error: err.message
        }
    }
}

async function createTicket(ticketBody){
    if (ticketBody.id == undefined)
        return {success: false, error: "dateID is required"}

    try{
        const date = DateModel.findById(ticketBody.id);;
        const index = date.tickets.push(ticketBody);
        date.save();

        const ticket = date.tickets[index - 1];

        return {
            success: true,
            id: ticket._id
        }
    } catch(err){
        return {
            success: false,
            error: err.message
        }
    }
}

async function getDate(id){
    try{
        const date = await DateModel.findById(id);

        return {
            success: true,
            date: date
        }
    } catch(err){
        return {
            success: false,
            error: err.message
        }
    }
}

async function getDates(){    
    try{
        const dates = await DateModel.find();        
        return {
            success: true,
            dates: dates
        }
    } catch(err){
        return {
            success: false,
            error: err.message
        }    
    }
}

async function updateDate(dateDetails){
    if (dateDetails.id == undefined){
        return {success: false, error: "date ID is required"}
    }

    try{ 
        await DateModel.findByIdAndUpdate(dateDetails.id, dateDetails, {runValidators: true});

        return {
            success: true,
            message: "date updated"
        }
    } catch(err){
        return {
            success: false,
            error: err.message
        }
    }
}

async function updateTicket(ticketDetails){
    if (ticketDetails.dateId == undefined || ticketDetails.id == undefined){
        return {success: false, error: "ticket/date ID is required"}
    }

    try{
        const date = await DateModel.findById(ticketDetails.dateId);        
        const ticketIndex = date.tickets.findIndex(t => t._id == ticketDetails.id);        
        date.tickets[ticketIndex] = ticketDetails;
        date.save();

        return {
            success: true,
            message: "ticket updated"
        }
    } catch(err){
        return {
            success: false,
            error: err.message
        }
    }
}

async function deleteDate(id){
    try{
        await DateModel.findByIdAndDelete(id);
        return {
            success: true,
            message: "deleted"
        }
    } catch(err){
        return {
            success: false,
            error: err.message
        }
    }
}

async function deleteTicket(dateId, ticketId){
    try{
        const date = await DateModel.findById(dateId);;
        date.tickets.pull({_id: ticketId});
        date.save();

        return {
            success: true,
            message: "ticket deleted"
        }
    } catch(err){
        return {
            success: false,
            error: err.message
        }
    }
}

module.exports = {
    createDate,
    getDate,
    getDates,
    updateDate,
    deleteDate,
    createTicket,
    updateTicket,
    deleteTicket
}