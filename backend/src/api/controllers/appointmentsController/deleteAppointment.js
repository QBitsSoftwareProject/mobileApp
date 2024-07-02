const appointmentSchema = require("../../models/appointments/appointmentsModels");

exports.deleteAllAppointments = async (req, res) => {
  try {
    const userId = req.user.user_id;

    // Delete appointments associated with the userId
    const result = await appointmentSchema.deleteMany({ userId: userId });

    if (result.deletedCount == 0) {
      return res
        .status(404)
        .json({ message: "No appointments found for this user" });
    }

    res
      .status(200)
      .json({ message: "All appointments for the user deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete appointments", err });
  }
};

exports.deleteAnAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    // console.log("appointmentId", appointmentId);
    const userId = req.user.user_id;

    const relevantAppointment = await appointmentSchema.findById(appointmentId);

    if (!relevantAppointment) {
      return res.status(404).json({ message: "appointment not found" });
    }
    // console.log("relevantAppointmentuserId", relevantAppointment.userId);
    // console.log("userId", userId);
    // Finding and deleting the appointment by id
    if (relevantAppointment.userId == userId) {
      await appointmentSchema.findByIdAndDelete({ _id: appointmentId });

      return res
        .status(204)
        .json({ message: "appointment deleted successfully" });
    }
    return res.status(401).json({ message: "Authorization Failed" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Appointment delete failed", error: err.message });
  }
};
