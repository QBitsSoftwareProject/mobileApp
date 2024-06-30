const appointmentSchema = require("../../models/appointments/appointmentsModels");
const doctorModel = require("../../models/doctor/doctor");

exports.getUserAppointments = async (req, res) => {
  try {
    const userId = req.user.user_id;

    const relevantAppointments = await appointmentSchema
      .find({
        userId: userId,
      })
      .populate("doctorId")
      .sort({ createdAt: -1 });

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

exports.getDoctorAppointmentCount = async (req, res) => {
  try {
    const doctorId = req.params;

    const relevantAppointments = await appointmentSchema.find({
      doctorId: doctorId.id,
    });

    if (!relevantAppointments) {
      return res.status(404).json({ message: "Appointments not found!" });
    }
    return res.status(201).json(relevantAppointments.length);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch!", error: err });
  }
};

exports.getDoctorCompletedAppointmentCount = async (req, res) => {
  try {
    const doctorId = req.params;

    const relevantAppointments = await appointmentSchema.find({
      doctorId: doctorId.id,
      status: "Completed",
    });

    if (!relevantAppointments) {
      return res.status(404).json({ message: "Appointments not found!" });
    }
    return res.status(201).json(relevantAppointments.length);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch!", error: err });
  }
};

// const getAvailableTimes = async (req, res) => {
//   const { doctorId, date } = req.params;

//   try {
//     // Fetch all booked time slots for the given doctor and date
//     const bookedAppointments = await UserAppointment.find({ doctorId, date });

//     // Get all available time slots for the doctor
//     const allTimes = []; // Fetch all available times logic based on your requirements

//     // Filter out booked time slots
//     const availableTimes = allTimes.filter((time) => {
//       return !bookedAppointments.some((appt) => appt.selectedTimeSlot === time);
//     });

//     res.status(200).json({ availableTimes });
//   } catch (error) {
//     console.error("Error fetching available times:", error);
//     res.status(500).json({ message: "Failed to fetch available times." });
//   }
// };
