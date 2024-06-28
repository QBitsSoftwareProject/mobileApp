const postSchema = require("../../models/posts/postsModels");

exports.updatePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user.user_id;

    const relevantPost = await postSchema.findById(postId);

    if (!relevantPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Destructuring the request body to extract post details
    const { newDescription, newImage } = req.body;

    // Creating an object with updated post details
    const updatePost = {
      description: newDescription,
      image: newImage,
    };

    if (relevantPost.userId == userId) {
      // Finding and updating the post by ID
      await postSchema.findByIdAndUpdate(postId, updatePost, { new: true });

      // Sending success response with status code 201 and a message
      return res.status(201).json({ message: "Post updated successfully" });
    }
    return res.status(401).json({ message: "Authorization failed!" });
  } catch (err) {
    res.status(500).json({ error: "Post update failed", details: err.message });
  }
};
