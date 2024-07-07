const commentsSchema = require("../../models/comments/commentsModels");

exports.deletecomments = async (req, res) => {
  try {
    const { commentId } = req.params;

    const userId = req.user.user_id;

    const relevantComment = await commentsSchema.findById(commentId);

    if (!relevantComment) {
      return res.status(404).json({ message: "comment not found" });
    }

    if (relevantComment.userId == userId) {
      // Finding and deleting the comment by id
      await commentsSchema.findByIdAndDelete({
        _id: commentId,
      });

      // Sending success response with status code 201 and a success message
      return res.status(201).json({ message: "comment deleted successfully" });
    }
    return res.status(401).json({ message: "Authorization Failed" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "comment delete failed", error: err.message });
  }
};
