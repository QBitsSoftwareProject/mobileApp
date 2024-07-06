const notificationSchema = require("../../models/notification/notification");

exports.getNotification = async (req, res) => {
  try {
    const userId = req.user.user_id;
    const { lastCreatedAt, limit } = req.query;
    const queryLimit = parseInt(limit);

    // Build query for user notifications
    const userNotificationsQuery = {
      recipientId: userId,
      senderId: { $ne: null },
      ...(lastCreatedAt && { createdAt: { $lt: new Date(lastCreatedAt) } }),
    };

    //get all notifications
    const allNotifications = await notificationSchema
      .find(userNotificationsQuery)
      .populate("senderId")
      .sort({ createdAt: -1 }) // Sort by createdAt descending
      .limit(queryLimit);

    const sytemNotification = await notificationSchema
      .find({
        recipientId: userId,
        senderId: null,
      })
      .sort({ createdAt: -1 });

    const releventData = [];

    allNotifications.map((item) => {
      const obj = {
        _id: item._id,
        senderId: item.senderId._id,

        userName: item.senderId.userName,
        proPic: item.senderId.proPic,
        message: item.message,
        type: item.type,
        referenceId: item.referenceId,
        status: item.status,
        createdAt: item.createdAt,
      };

      releventData.push(obj);
    });

    sytemNotification.map((item) => {
      const obj2 = {
        _id: item._id,
        message: item.message,
        type: item.type,
        status: item.status,
        createdAt: item.createdAt,
      };
      releventData.push(obj2);
    });

    // console.log(releventData);

    res.status(201).json(releventData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
