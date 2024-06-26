const notificationSchema = require("../../models/notification/notification");

exports.getNotification = async (req, res) => {
  try {
    const userId = req.user.user_id;

    //get all notifications
    const allNotifications = await notificationSchema
      .find({ recipientId: userId })
      .populate("recipientId")
      .populate("referenceId");

    res.status(201).json(allNotifications);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
