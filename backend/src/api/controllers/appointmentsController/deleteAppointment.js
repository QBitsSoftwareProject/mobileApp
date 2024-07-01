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
    res.status(500).json({ message: "Failed to delete appointments", error });
  }
};
