const regularUser = require("../../models/regularUser/regularUser");
const bcrypt = require("bcryptjs");
const {
  adminNotification,
} = require("../../services/notificationService/notificationCreate");

exports.updateRegularUser = async (req, res) => {
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
      proPic,
      coverImage,
      selectedGoals,
    } = req.body;

    if (password) {
      const encryptedPwd = await bcrypt.hash(password, 10);
      password = encryptedPwd;
    }

    // if (email) {
    //   email = email.toLowerCase();
    // }

    // Creating an object with updated user details
    const updateUser = {
      fullName,
      userName,
      email,
      password,
      contactNumber,
      address,
      city,
      country,
      proPic,
      coverImage,
      selectedGoals,
    };

    // Finding and updating the user by ID
    await regularUser.findByIdAndUpdate(req.user.user_id, updateUser);

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
      res
        .status(500)
        .json({ error: "User update failed", details: err.message });
    }
  }
};

exports.updateUserAccessStatus = async (req, res) => {
  try {
    const { access } = req.body;
    const userId = req.params.id;

    // Finding and updating the user by ID
    const user = await regularUser.findByIdAndUpdate(userId, { access });

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Sending success response with status code 201 and a message
    return res
      .status(201)
      .json({ message: "User access level updated successfully" });
  } catch (err) {
    res.status(500).json({
      error: "Error in updating user access level",
      details: err.message,
    });
  }
};
