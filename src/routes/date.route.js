const router = require("express").Router();
const { createDate, updateDate, deleteDate, getDate, getDates, createTicket, updateTicket, deleteTicket } = require("../controllers/date.controller")

router.post("/", createDate);
router.get("/", getDates);
router.get("/:id", getDate);
router.put("/:id", updateDate);
router.delete("/:id", deleteDate);

router.post("/:id/tickets", createTicket);
router.put("/:dateId/tickets/:id", updateTicket);
router.delete("/:dateId/tickets/:id", deleteTicket);

module.exports = router;