const express = require("express");
const {
  createAppointment,
} = require("../../controllers/appointmentsController/createAppointment");
const {
  getAppointments,
} = require("../../controllers/appointmentsController/getAppointments");
const auth = require("../../middlewares/auth");
const router = express.Router();

router.post("/", auth, createAppointment);
router.get("/", getAppointments);

module.exports = router;
