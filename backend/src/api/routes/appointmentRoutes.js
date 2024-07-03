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
  getAvailableTimes,
} = require("../controllers/appointmentsController/getAppointments");
const {
  updateDocAppointment,
} = require("../controllers/appointmentsController/updateAppointment");
const {
  deleteAllAppointments,
  deleteAnAppointment,
} = require("../controllers/appointmentsController/deleteAppointment");

const router = express.Router();

router.post("/", auth, createAppointment);
router.get("/user-appointment", auth, getUserAppointments);
router.get("/doctor-pending-appointment", auth, getDoctorPendingAppointments);
router.get("/doctor-accepted-appointment", auth, getDoctorAcceptedAppointments);
router.get("/doctor-appointments/:id", auth, getDoctorAppointmentCount);
router.get(
  "/doctor-completed-appointments/:id",
  getDoctorCompletedAppointmentCount
);
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
router.delete("/delete-appointments", auth, deleteAllAppointments);
router.delete(
  "/delete-an-appointment/:appointmentId",
  auth,
  deleteAnAppointment
);
// router.get("/available-times/:doctorId", auth, getAvailableTimes);

module.exports = router;
