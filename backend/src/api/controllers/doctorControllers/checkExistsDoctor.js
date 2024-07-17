const doctorModel = require("../../models/doctor/doctor");
const userModel = require("../../models/regularUser/regularUser");

exports.checkExistsDoctor = async (req, res) => {
  try {
    const { email } = req.body;

    //check email with doctor model
    const checkDoctor = await doctorModel.findOne({ email });

    if (!checkDoctor) {
      return res.json({
        message: "User with this email does not exist.",
        user: null,
      });
    }

    res.status(200).json({
      message: "User with this email already exists.",
      user: checkDoctor._id,
      role: "doctor",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error fetching user", message: error.message });
  }
};
