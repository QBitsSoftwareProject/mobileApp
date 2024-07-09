const express = require("express");

const auth = require("../middlewares/auth");
const adminAuth = require("../middlewares/adminAuth");

const {
  createReport,
} = require("../controllers/reportController/createReport");
const { getReport } = require("../controllers/reportController/getReport");

const router = express.Router();

router.post("/create-report", auth, createReport);
router.get("/view-report", auth, adminAuth, getReport);

module.exports = router;
