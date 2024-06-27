const commentsSchema = require("../../models/comments/commentsModels");
const notificationSchema = require("../../models/notification/notification");
const {
  createNotification,
} = require("../../services/notificationService/notificationCreate");

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
    await createNotification(
      userId,
      "RegularUser",
      "commented on your post.",
      "comment",
      postId,
      "Post"
    );

    return res.status(201).json("New comment succesfully created!");
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "New comment created unsuccsess!", error: error });
  }
};
