const commentsSchema = require("../../models/comments/commentsModels");

exports.updateComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const userId = req.user.user_id;

    const relevantComment = await commentsSchema.findById(commentId);

    if (!relevantComment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    // Destructuring the request body to extract Comment details
    const { newComment } = req.body;

    // Creating an object with updated Comment details
    const updateComment = {
      content: newComment,
    };

    if (relevantComment.userId == userId) {
      // Finding and updating the Comment by ID
      await commentsSchema.findByIdAndUpdate(commentId, updateComment, {
        new: true,
      });
      // Sending success response with status code 201 and a message
      return res.status(201).json({ message: "Comment updated successfully" });
    }
    return res.status(401).json({ message: "Authorization failed!" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Comment update failed", details: err.message });
  }
};
