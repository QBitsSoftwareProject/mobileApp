const doctorModel = require("../../models/doctor/doctor");
const bcrypt = require("bcryptjs");

exports.updateDoctor = async (req, res) => {
  try {
    // Destructuring the request body to extract user details
    const {
      fullName,
      userName,
      email,
      password,
      contactNumber,
      address,
      city,
      country,
      licenseSide1,
      licenseSide2,
      specialization,
      qualification,
      availableDays,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
      proPic,
      bio,
    } = req.body;

    // Extracting the user ID from request parameters
    const { id } = req.params;

    const encryptedPwd = await bcrypt.hash(password, 10);

    // Creating an object with updated user details
    const updateUser = {
      fullName,
      userName,
      email: email.toLowerCase(),
      password: encryptedPwd,
      contactNumber,
      address,
      city,
      country,
      licenseSide1,
      licenseSide2,
      specialization,
      qualification,
      availableDays,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
      proPic,
      bio,
    };

    // Finding and updating the user by ID
    await doctorModel.findByIdAndUpdate(req.user.user_id, updateUser);

    // Sending success response with status code 201 and a message
    return res.status(201).json({ message: "User updated successfully" });
  } catch (err) {
    // Handling validation errors
    if (err.name === "ValidationError") {
      const validationErrors = err.message;
      return res
        .status(400)
        .json({ error: "User update failed", details: validationErrors });
    } else {
      res.status(500).json({ error: "User update failed", details: err });
    }
  }
};
