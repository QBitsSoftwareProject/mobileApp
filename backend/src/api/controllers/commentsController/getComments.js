const commentsSchema = require("../../models/comments/commentsModels");

exports.getComments = async (req, res) => {
  try {
    const { postId } = req.params;

    const Comments = await commentsSchema
      .find({ postId: postId })
      .sort({ createdAt: -1 }); //.populate("userId")

    if (!Comments) {
      return res.status(404).json({ message: "Comments not found!" });
    }

    return res.status(201).json(Comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch!", error: err });
  }
};

exports.getAComment = async (req, res) => {
  const { CommentId } = req.params;

  try {
    const Comment = await commentsSchema.findById(CommentId);

    if (!Comment) {
      return res.status(404).json({ message: "Comment not found!" });
    }

    return res.status(201).json(Comment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch!", error: err });
  }
};

exports.getUpdatedComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const comment = await commentsSchema.findById({ postId: postId });

    if (!comment) {
      return res.status(404).json({ message: "Comment not found!" });
    }

    return res.status(201).json(comment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch!", error: err });
  }
};
