const { createEvent, deleteEvent, getEvent, getEvents, updateEvent } = require("../controllers/event.controller");
const router = require("express").Router();

router.post("/", createEvent);
router.get("/:id", getEvent);
router.get("/", getEvents);
router.delete("/:id", deleteEvent);
router.put("/:id", updateEvent);

module.exports = router;