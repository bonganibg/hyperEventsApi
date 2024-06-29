const router = require("express").Router();
const { createDate, updateDate, deleteDate, getDate, getDates } = require("../controllers/date.controller")

router.post("/", createDate);
router.get("/", getDates);
router.get("/:id", getDate);
router.put("/:id", updateDate);
router.delete("/:id", deleteDate);

module.exports = router;