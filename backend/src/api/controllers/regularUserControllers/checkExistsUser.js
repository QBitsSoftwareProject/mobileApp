const regularUser = require("../../models/regularUser/regularUser");
const doctorModel = require("../../models/doctor/doctor");

exports.checkExistsUser = async (req, res) => {
  try {
    const { email } = req.body;

    const checkUser = await regularUser.findOne({ email });

    if (!checkUser) {
      return res.json({
        message: "User with this email does not exist.",
        user: null,
      });
    }

    res.status(200).json({
      message: "User with this email already exists.",
      user: checkUser._id,
      role: "user",
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching user", message: error.message });
  }
};
