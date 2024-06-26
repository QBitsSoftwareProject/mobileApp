const notificationSchema = require("../../models/notification/notification");

exports.getNotification = async (req, res) => {
  try {
    const userId = req.user.user_id;

    //get all notifications
    const allNotifications = await notificationSchema
      .find({ recipientId: userId })
      .populate("recipientId");

    const releventData = [];

    allNotifications.map((item) => {
      const obj = {
        _id: item._id,
        recipientId: item.recipientId._id,
        userName: item.recipientId.userName,
        proPic: item.recipientId.proPic,
        message: item.message,
        type: item.type,
        referenceId: item.referenceId,
        status: item.status,
      };

      releventData.push(obj);
    });

    res.status(201).json(releventData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
