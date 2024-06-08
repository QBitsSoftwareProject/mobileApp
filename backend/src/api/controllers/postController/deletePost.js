const postsModels = require("../../models/posts/postsModels");

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    // Finding and deleting the task by id
    const deletedPost = await postsModels.findByIdAndDelete(id);

    // If task is not found, return a 404 error response
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Sending success response with status code 201 and a success message
    return res.status(201).json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Post delete failed", error: err.message });
  }
};
