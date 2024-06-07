const express = require("express");
const {
  createAppointment,
} = require("../../controllers/appointmentsController/createAppointment");

const auth = require("../../middlewares/auth");
const {
  getUserAppointments,
  getDoctorPendingAppointments,
  getDoctorAcceptedAppointments,
  getDoctorCompletedAppointments,
} = require("../../controllers/appointmentsController/getAppointments");

const router = express.Router();

router.post("/", auth, createAppointment);
router.get("/user-appointment", auth, getUserAppointments);
router.get("/doctor-pending-appointment", auth, getDoctorPendingAppointments);
router.get("/doctor-accepted-appointment", auth, getDoctorAcceptedAppointments);
router.get(
  "/doctor-completed-appointment",
  auth,
  getDoctorCompletedAppointments
);
router.update("/doc-appointment", auth, updateDocAppointment);

module.exports = router;
