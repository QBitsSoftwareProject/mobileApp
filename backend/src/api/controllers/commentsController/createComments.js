const commentsSchema = require("../../models/comments/commentsModels");
const notificationSchema = require("../../models/notification/notification");

exports.createComment = async (req, res) => {
  try {
    const { postId, content } = req.body;

    const userId = req.user.user_id;

    const createdAt = new Date();

    const newComment = new commentsSchema({
      userId,
      postId,
      createdAt: createdAt,
      content,
    });

    await newComment.save();

    //create a notification
    const newNotification = new notificationSchema({
      recipientId: userId,
      recipientModel: "RegularUser",
      message: "commented on your post.",
      type: "comment",
      referenceId: postId,
      referenceModel: "Comments",
    });

    await newNotification.save();

    return res.status(201).json("New comment succesfully created!");
  } catch (error) {
    console.error(error);
    return res.status(500).json("New comment created unsuccsess!");
  }
};
