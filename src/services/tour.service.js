const TourModel = require("../models/tour.model");
const EventModel = require("../models/event.model");
const DateModel = require("../models/date.model")

async function createTour(tourDetails){
    const body = tourDetails;

    try{
        const tour = await TourModel.create(body);
        return {success: true, id: tour._id}
    } catch(err){
        return {success: false, error: err}
    }
}

async function getTours(){
    try{
        const tours = await TourModel.find();        
        return {
            success: true,
            tours: tours
        }
    } catch(err){
        return {success: false, error: err}    
    }
}

async function getTour(id){
    try{
        const tour = await TourModel.findById(id);
        return {
            success: true,
            tour: tour
        }
    } catch(err){
        return {success: false, error: err}
    }
}

async function updateTour(tourDetails){
    if (tourDetails.id === undefined)
        return {success: false, error: "No tour id provided"}

    try{
        const tour = await TourModel.findByIdAndUpdate(tourDetails.id, tourDetails, {new: true});
        return {
            success: true,
            tour: tour
        }
    } catch(error){
        return {success: false, error: error}
    }
}

async function deleteTour(id){    
    try{
        await TourModel.findByIdAndDelete(id);
                
        await EventModel.deleteMany({tourId: id});
        await DateModel.deleteMany({tourId: id});        
        
        return {success: true}
    } catch(error){
        return {success: false, error: error}
    }
}

module.exports = {
    createTour,
    getTours,
    getTour,
    updateTour,
    deleteTour
}