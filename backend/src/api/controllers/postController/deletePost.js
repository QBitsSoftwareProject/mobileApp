const postSchema = require("../../models/posts/postsModels");

exports.deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user.user_id;

    const relevantPost = await postSchema.findById(postId);

    if (!relevantPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (relevantPost.userId == userId) {
      await postSchema.findByIdAndDelete({ _id: postId });

      // Sending success response with status code 201 and a success message
      return res.status(201).json({ message: "Post deleted successfully" });
    }
    return res.status(401).json({ message: "Authorization failed!" });
  } catch (err) {
    res.status(500).json({ error: "Post delete failed", error: err.message });
  }
};
