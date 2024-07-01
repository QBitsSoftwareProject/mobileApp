const doctorModel = require("../../models/doctor/doctor");
const {
  adminNotification,
} = require("../../services/notificationService/notificationCreate");

exports.updateDoctorRegStatus = async (req, res) => {
  try {
    const regStatus = req.body;
    const doctorId = req.params;

    if (regStatus) {
      await adminNotification(
        "Your registration successfully. Now your profile is published. ",
        "system",
        doctorId.id
      );
    }

    // Finding and updating the user by ID
    await doctorModel.findByIdAndUpdate(doctorId.id, regStatus);

    // Sending success response with status code 201 and a message
    return res
      .status(201)
      .json({ message: "User registration status updated successfully" });
  } catch (err) {
    res
      .status(500)
      .json({
        error: "Error in updating doctor registration status",
        details: err,
      });
  }
};
