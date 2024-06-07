const appointmentsModels = require("../../models/appointments/appointmentsModels");

exports.updateDocAppointment = async (req, res) => {
  try {
    // Destructuring the request body to extract user details
    const { fullName, proPic, time, date, contactNumber, status } = req.body;

    // Creating an object with updated user details
    const updateAppointment = {
      fullName,
      proPic,
      time,
      date,
      contactNumber,
      status,
    };

    // Finding and updating the user by ID
    await appointmentsModels.findByIdAndUpdate(
      req.user.user_id,
      updateAppointment
    );

    // Sending success response with status code 201 and a message
    return res.status(201).json({ message: "Status updated successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Status  update failed", details: err.message });
  }
};
