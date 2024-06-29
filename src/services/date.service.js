const DateModel = require("../models/date.model");

async function createDate(dateBody){
    if (dateBody.eventId == undefined || dateBody.tourId == undefined)
        return {success: false, error: "tourID/eventId is required"}

    try{
        const date = await DateModel.create(dateBody);
        console.log(date)
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

module.exports = {
    createDate,
    getDate,
    getDates,
    updateDate,
    deleteDate
}