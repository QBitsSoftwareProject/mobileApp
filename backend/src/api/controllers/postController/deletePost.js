const postSchema = require("../../models/posts/postsModels");

exports.deletePost = async (req, res) => {
  const { postId } = req.params;

  try {
    // Finding and deleting the post by id
    const deletedPost = await postSchema.findByIdAndDelete(postId);

    // If post is not found, return a 404 error response
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Sending success response with status code 201 and a success message
    return res.status(201).json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Post delete failed", error: err.message });
  }
};
