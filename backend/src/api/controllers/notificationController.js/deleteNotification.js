const notificationModel = require("../../models/notification/notification");

exports.deleteAllNotification = async (req, res) => {
  try {
    const userId = req.user.user_id;

    // Delete notifications associated with the userId
    const result = await notificationModel.deleteMany({ recipientId: userId });

    if (result.deletedCount == 0) {
      return res
        .status(404)
        .json({ message: "No notifications found for this user" });
    }

    res
      .status(200)
      .json({ message: "All notifications for the user deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete notifications", error: err.message });
  }
};
