const TourModel = require("../models/tour.model");
const { createTour } = require("../services/tour.service")

exports.createTour = async (req, res) => {
    const result = await createTour(req.body);

    if (result.success){
        res.status(203).json({
            message: "Created tour",
            id: result.id
        })
    } else{
        res.status(400).json({
            message: "Failed to create tour",
            error: result.error
        })
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