const router = require("express").Router();
const { createTour, getTour } = require("../controllers/tour.controller");
 
router.post('/', createTour)
router.get('/:id', getTour)

module.exports = router;