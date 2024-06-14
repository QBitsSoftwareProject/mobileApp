const userModel = require("../../models/regularUser/regularUser");

exports.checkTheTerm = async (req, res) => {
  try {
    const userId = req.user.user_id;

    const user = await userModel.findById(userId);
    if (!user) return { error: true, status: 404, message: "User not found" };

    if (
      user.currentTaskType === "short-term" &&
      user.currentShortTermDay >= 7
    ) {
      user.currentTaskType = "medium-term";
      user.currentShortTermDay = 0;
    } else if (
      user.currentTaskType === "medium-term" &&
      user.currentMediumTermDay >= 14
    ) {
      user.currentTaskType = "long-term";
      user.currentMediumTermDay = 0;
    } else if (
      user.currentTaskType === "long-term" &&
      user.currentLongTermDay >= 30
    ) {
      user.currentTaskType = "short-term";
      user.currentLongTermDay = 0;
    }

    await user.save();
    return res.status(200).json({ message: user.currentTaskType });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
