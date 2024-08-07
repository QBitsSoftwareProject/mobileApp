const doctorModel = require("../../models/doctor/doctor");

// Controller function to get all doctors
exports.getDoctors = async (req, res) => {
  try {
    // Finding all doctors
    const getUser = await doctorModel.find();

    // If no users are found, return a 404 error response
    if (!getUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Sending success response with status code 200 and the list of users
    return res.status(201).json(getUser);
  } catch (err) {
    // Handling internal server errors
    res.status(500).json({ error: "Error fetching user", error: err.message });
  }
};

// Controller function to get all doctors
exports.getRegisteredDoctors = async (req, res) => {
  try {
    // Finding all doctors
    const getUser = await doctorModel.find({
      regStatus: true,
      access: true,
    });

    // If no users are found, return a 404 error response
    if (!getUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Sending success response with status code 200 and the list of users
    return res.status(201).json(getUser);
  } catch (err) {
    // Handling internal server errors
    res.status(500).json({ error: "Error fetching user", error: err.message });
  }
};

// get one user by Id ------------------------------------------------------------------------------------------------------------------
// Controller function to get a single regular user by ID
exports.getADoctor = async (req, res) => {
  try {
    const { doctorId } = req.body;
    // Finding the user by ID
    const getUser = await doctorModel.findById(req.user.user_id || doctorId);

    // If user is not found, return a 404 error response
    if (!getUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Sending success response with status code 200 and the user object
    return res.status(201).json(getUser);
  } catch (err) {
    res.status(500).json({ error: "User fetch failed", err: err.message });
  }
};
