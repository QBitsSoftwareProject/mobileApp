const doctorModel = require("../../models/doctor/doctor");

exports.updateDoctorAccessStatus = async (req, res) => {
  try {
    const { access } = req.body;
    const userId = req.params.id;

    // Finding and updating the user by ID
    const doctor = await doctorModel.findByIdAndUpdate(userId, { access });

    if (!doctor) {
      return res.status(404).send("Doctor not found");
    }

    // Sending success response with status code 201 and a message
    return res
      .status(201)
      .json({ message: "Doctor access level updated successfully" });
  } catch (err) {
    res.status(500).json({
      error: "Error in updating user access level",
      details: err.message,
    });
  }
};
