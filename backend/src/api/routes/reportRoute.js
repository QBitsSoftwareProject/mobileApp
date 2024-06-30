const express = require("express");
const {
  createReport
} = require("../controllers/reportController/createReport");
const { getReport } = require("../controllers/reportController/getReport");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/create-report", auth, createReport);
router.get("/view-report", getReport);

module.exports = router;
