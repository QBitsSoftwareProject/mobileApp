const express = require("express");
const {
  createAppointment,
} = require("../../controllers/appointmentsController/createAppointment");

const auth = require("../../middlewares/auth");
const {
  getUserAppointments,
} = require("../../controllers/appointmentsController/getAppointments");
const {
  getDoctorAppointments,
} = require("../../controllers/appointmentsController/getAppointments");
const router = express.Router();

router.post("/", auth, createAppointment);
router.get("/user-appointment", auth, getUserAppointments);
router.get("/doctor-appointment", auth, getDoctorAppointments);

module.exports = router;
