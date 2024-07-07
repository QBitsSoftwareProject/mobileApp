const doctorModel = require("../../models/doctor/doctor");
const {
  adminNotification,
} = require("../../services/notificationService/notificationCreate");

exports.updateDoctorRegStatus = async (req, res) => {
  try {
    const { regStatus } = req.body;
    const doctorId = req.params.id;

    if (regStatus) {
      await adminNotification(
        "Your registration successfully. Now your profile is published. ",
        "system",
        doctorId
      );
    }

    // Finding and updating the user by ID
    const doctor = await doctorModel.findByIdAndUpdate(doctorId, {
      regStatus,
    });

    if (!doctor) {
      return res.status(404).send("Doctor not found");
    }

    // Sending success response with status code 201 and a message
    return res
      .status(201)
      .json({ message: "Doctor registration status updated successfully" });
  } catch (err) {
    res.status(500).json({
      error: "Error in updating doctor registration status",
      details: err.message,
    });
  }
};
