const notificationSchema = require("../../models/notification/notification");

exports.checkNotifiaction = async (req, res) => {
  try {
    const userId = req.user.user_id;

    //get all notifications
    const checkNotification = await notificationSchema.find({
      recipientId: userId,
      status: "unread",
    });

    if (checkNotification.length > 0) {
      return res.status(201).json({ notify: true });
    }

    return res.status(203).json({ notify: false });
  } catch (error) {
    console, log(error);
    res.status(500).send(error.message);
  }
};
