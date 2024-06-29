const router = require("express").Router();
const { createTour, getTour, getTours, updateTour, deleteTour } = require("../controllers/tour.controller");
 
router.post('/', createTour);
router.get('/:id', getTour);
router.get("/", getTours);
router.put("/:id", updateTour);
router.delete("/:id", deleteTour);

module.exports = router;