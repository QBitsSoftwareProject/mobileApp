const express = require("express");
const {
  createAppointment,
} = require("../controllers/appointmentsController/createAppointment");

const auth = require("../middlewares/auth");
const {
  getUserAppointments,
  getDoctorPendingAppointments,
  getDoctorAcceptedAppointments,
  getDoctorCompletedAppointments,
  getDoctorRejectedAppointments,
  getDoctorCancelledAppointments,
  getDoctorAppointmentCount,
  getDoctorCompletedAppointmentCount,
} = require("../controllers/appointmentsController/getAppointments");
const {
  updateDocAppointment,
} = require("../controllers/appointmentsController/updateAppointment");

const router = express.Router();

router.post("/", auth, createAppointment);
router.get("/user-appointment", auth, getUserAppointments);

router.get("/doctor-pending-appointment", auth, getDoctorPendingAppointments);
router.get("/doctor-accepted-appointment", auth, getDoctorAcceptedAppointments);
router.get("/doctor-appointments/:id", getDoctorAppointmentCount);
router.get("/doctor-completed-appointments/:id", getDoctorCompletedAppointmentCount);
router.get(
  "/doctor-completed-appointment",
  auth,
  getDoctorCompletedAppointments
);
router.get("/doctor-rejected-appointment", auth, getDoctorRejectedAppointments);
router.get(
  "/doctor-cancelled-appointment",
  auth,
  getDoctorCancelledAppointments
);
router.put("/appointment-status", auth, updateDocAppointment);

module.exports = router;
