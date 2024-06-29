const TourModel = require("../models/tour.model");

exports.createTour = async (req, res) => {
    const body = req.body;

    try{
        const tour = await TourModel.create(body);
        res.status(203).json(tour)
    } catch(err){
        res.status(400).json(err.message)
    }
}

exports.getTour = async (req, res) => {
    const id = req.params.id;

    try{
        const tour = await TourModel.findById(id)
        res.status(200).json(tour)
    } catch(err){
        res.status(400).json(err.message)
    }
}