const notificationSchema = require("../../models/notification/notification");
const postSchema = require("../../models/posts/postsModels");
const appointmentSchema = require("../../models/appointments/appointmentsModels");

exports.createNotification = async (
  senderId,
  recipientModel,
  message,
  type,
  referenceId,
  referenceModel
) => {
  try {
    let userId;
    if (referenceModel == "Post") {
      const releventPost = await postSchema.findById(referenceId);
      userId = releventPost.userId;
    } else if (referenceModel == "userAppointments") {
      const releventAppointment = await appointmentSchema.findById(referenceId);

      userId = releventAppointment.userId;
    }

    //self notification handling
    if (senderId == userId) {
      return;
    }

    //create a notification
    const newNotification = new notificationSchema({
      senderId,
      recipientId: userId,
      recipientModel,
      message,
      type,
      referenceId,
      referenceModel,
    });

    await newNotification.save();

    return newNotification;
  } catch (error) {
    throw new Error(error);
  }
};

exports.adminNotification = async (message, type, recipientId) => {
  try {
    //create a notification
    const newNotification = new notificationSchema({
      senderId: null,
      recipientId,
      message,
      type,
    });

    await newNotification.save();

    return newNotification;
  } catch (error) {
    throw new Error(error);
  }
};
