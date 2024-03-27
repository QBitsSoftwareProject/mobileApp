const express = require ("express");
const { createAppointment } = require("../../controllers/appointmentsController/createAppointment");
const { getAppointments } = require("../../controllers/appointmentsController/getAppointments");

const router = express.Router();

router.post("/", createAppointment);
router.get("/", getAppointments);

module.exports = router;