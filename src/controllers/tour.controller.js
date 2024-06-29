const { createTour, updateTour, deleteTour, getTour, getTours } = require("../services/tour.service")

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
    const result = await getTour(id);

    if (result.success){
        res.status(200).json({
            message: "Fetched tour",
            tour: result.tour
        })
    } else{
        res.status(400).json({
            message: "Failed to fetch tour",
            error: result.error
        })    
    }
}

exports.getTours = async (req, res) => {
    const result = await getTours();

    if (result.success){
        res.status(200).json({
            message: "Fetched tours",
            tours: result.tours
        })
    } else{
        res.status(400).json({
            message: "Failed to fetch tours",
            error: result.error
        })
    }
}

exports.updateTour = async (req, res) => {
    const tourDetails = req.body;
    tourDetails.id = req.params.id;
    const result = await updateTour(tourDetails);

    if (result.success){
        res.status(200).json({
            message: "Updated tour",
            id: result.id
        })
    } else{
        res.status(400).json({
            message: "Failed to update tour",
            error: result.error
        })
    }
}

exports.deleteTour = async (req, res) => {
    const id = req.params.id;
    const result = await deleteTour(id);

    if (result.success){
        res.status(200).json({
            message: "Deleted tour",
            id: result.id
        })
    } else{
        res.status(400).json({
            message: "Failed to delete tour",
            error: result.error
        })
    }
}