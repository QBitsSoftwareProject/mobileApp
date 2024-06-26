const notificationSchema = require("../../models/notification/notification");

exports.notificationStatusUpdate = async (req, res) => {
  try {
    const { notificationId } = req.params;

    //get relevent notifications and update staus as read
    const releventNotification = await notificationSchema.findByIdAndUpdate(
      notificationId,
      { status: "read" }
    );

    if (!releventNotification) {
      return res.status(404).json("Notification not found");
    }

    res
      .status(201)
      .json({ message: "Notification status updated successfull" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
