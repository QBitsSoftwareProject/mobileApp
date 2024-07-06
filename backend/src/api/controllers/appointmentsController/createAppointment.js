const appointmentSchema = require("../../models/appointments/appointmentsModels");
const doctorSchema = require("../../models/doctor/doctor");

exports.createAppointment = async (req, res) => {
  try {
    const { doctorId, date, time } = req.body;
    const userId = req.user.user_id;
    const doctor = await doctorSchema.findById(doctorId);

    const newAppointment = new appointmentSchema({
      doctorId: doctor._id,
      userId,
      date,
      time,
    });

    await newAppointment.save();

    return res.status(201).json("New appointment successfully created!");
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed to create appointment");
  }
};
