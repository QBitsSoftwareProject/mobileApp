const appointmentSchema = require("../../models/appointments/appointmentsModels");
const doctorSchema = require("../../models/doctor/doctor");

exports.getUserAppointments = async (req, res) => {
  try {
    const userId = req.user.user_id;

    const relevantAppointments = await appointmentSchema
      .find({
        userId: userId,
      })
      .populate("doctorId");

    if (!relevantAppointments) {
      return res.status(404).json({ message: "Appointments not found!" });
    }

    return res.status(201).json(relevantAppointments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch!", error: err });
  }
};

exports.getDoctorPendingAppointments = async (req, res) => {
  try {
    const doctorId = req.user.user_id;

    // const doctor = await doctorSchema.findById(doctorId);

    const relevantAppointments = await appointmentSchema
      .find({
        doctorId: doctorId,
        status: "Pending",
      })
      .populate("userId");

    if (!relevantAppointments) {
      return res.status(404).json({ message: "Appointments not found!" });
    }

    return res.status(201).json(relevantAppointments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch!", error: err });
  }
};

exports.getDoctorAcceptedAppointments = async (req, res) => {
  try {
    const doctorId = req.user.user_id;

    // const doctor = await doctorSchema.findById(doctorId);

    const relevantAppointments = await appointmentSchema
      .find({
        doctorId: doctorId,
        status: "Accepted",
      })
      .populate("userId");

    if (!relevantAppointments) {
      return res.status(404).json({ message: "Appointments not found!" });
    }

    return res.status(201).json(relevantAppointments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch!", error: err });
  }
};

exports.getDoctorCompletedAppointments = async (req, res) => {
  try {
    const doctorId = req.user.user_id;

    // const doctor = await doctorSchema.findById(doctorId);

    const relevantAppointments = await appointmentSchema
      .find({
        doctorId: doctorId,
        status: "Completed",
      })
      .populate("userId");

    if (!relevantAppointments) {
      return res.status(404).json({ message: "Appointments not found!" });
    }

    return res.status(201).json(relevantAppointments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch!", error: err });
  }
};

exports.getDoctorRejectedAppointments = async (req, res) => {
  try {
    const doctorId = req.user.user_id;

    // const doctor = await doctorSchema.findById(doctorId);

    const relevantAppointments = await appointmentSchema
      .find({
        doctorId: doctorId,
        status: "Rejected",
      })
      .populate("userId");

    if (!relevantAppointments) {
      return res.status(404).json({ message: "Appointments not found!" });
    }

    return res.status(201).json(relevantAppointments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch!", error: err });
  }
};

exports.getDoctorCancelledAppointments = async (req, res) => {
  try {
    const doctorId = req.user.user_id;

    // const doctor = await doctorSchema.findById(doctorId);

    const relevantAppointments = await appointmentSchema
      .find({
        doctorId: doctorId,
        status: "Cancelled",
      })
      .populate("userId");

    if (!relevantAppointments) {
      return res.status(404).json({ message: "Appointments not found!" });
    }

    return res.status(201).json(relevantAppointments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch!", error: err });
  }
};
