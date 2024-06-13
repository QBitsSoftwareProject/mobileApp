const commentsSchema = require("../../models/comments/commentsModels");

exports.updateComment = async (req, res) => {
  const { commentId } = req.params;

  try {
    // Destructuring the request body to extract Comment details
    const { newContent } = req.body;

    // Creating an object with updated Comment details
    const updateComment = {
      content: newContent,
    };

    // Finding and updating the Comment by ID
    await commentsSchema.findByIdAndUpdate(commentId, updateComment, {
      new: true,
    });

    console.log("update Comment:", updateComment);

    if (!updateComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    // Sending success response with status code 201 and a message
    return res.status(201).json({ message: "Comment updated successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Comment update failed", details: err.message });
  }
};
