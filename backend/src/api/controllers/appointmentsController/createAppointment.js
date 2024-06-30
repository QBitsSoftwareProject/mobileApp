const appointmentSchema = require("../../models/appointments/appointmentsModels");
const doctorSchema = require("../../models/doctor/doctor");

exports.createAppointment = async (req, res) => {
  try {
    // const { docId } = req.params;

    const { doctorId, date, time } = req.body;
    const userId = req.user.user_id;
    const doctor = await doctorSchema.findById(doctorId);

    const existingAppointment = await appointmentSchema.findOne({
      doctorId,
      date,
      selectedTimeSlot: time,
    });

    if (existingAppointment) {
      return res
        .status(400)
        .json({ message: "This time slot is already booked." });
    }

    const newAppointment = new appointmentSchema({
      doctorId: doctor._id,
      userId,
      date,
      time,
      selectedTimeSlot: time,
      // status: "Pending",
    });

    await newAppointment.save();

    return res.status(201).json("New appointment succesfully created!");
  } catch (error) {
    console.error(error);
    return res.status(500).json("New appointment created unsuccsess!");
  }
};
