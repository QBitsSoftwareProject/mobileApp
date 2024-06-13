const commentsSchema = require("../../models/comments/commentsModels");

exports.deletecomments = async (req, res) => {
  const { commentId } = req.params;

  try {
    // Finding and deleting the comment by id
    const deletedcomment = await commentsSchema.findByIdAndDelete(commentId);

    // If comment is not found, return a 404 error response
    if (!deletedcomment) {
      return res.status(404).json({ message: "comment not found" });
    }

    // Sending success response with status code 201 and a success message
    return res.status(201).json({ message: "comment deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "comment delete failed", error: err.message });
  }
};
