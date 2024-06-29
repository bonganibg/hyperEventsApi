const TourModel = require("../models/tour.model");

async function createTour(tourDetails){
    const body = tourDetails;

    try{
        const tour = await TourModel.create(body);
        return {success: true, id: tour._id}
    } catch(err){
        return {success: false, error: err}
    }
}


module.exports = {
    createTour
}