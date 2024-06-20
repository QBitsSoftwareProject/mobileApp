const commentsSchema = require("../../models/comments/commentsModels");

exports.getComments = async (req, res) => {
  try {
    const { postId } = req.params;

    const Comments = await commentsSchema
      .find({ postId: postId })
      .sort({ createdAt: -1 });
    if (!Comments) {
      return res.status(404).json({ message: "Comments not found!" });
    }

    return res.status(201).json(Comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch!", error: err });
  }
};

exports.getCommentsCount = async (req, res) => {
  try {
    const { postId } = req.params;

    const Comments = await commentsSchema.find({ postId: postId });

    if (!Comments) {
      return res.status(404).json({ message: "Comments not found!" });
    }
    const count = Comments.length;

    return res.status(201).json(count);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch!", error: err });
  }
};

exports.getAComment = async (req, res) => {
  const { commentId } = req.params;

  try {
    const comment = await commentsSchema.findById(commentId);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found!" });
    }

    return res.status(201).json(comment);
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
