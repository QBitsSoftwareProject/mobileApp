const postSchema = require("../../models/posts/postsModels");

exports.updatePost = async (req, res) => {
  try {
    // Extracting the post ID from request parameters
    const { postId } = req.params;
    // Destructuring the request body to extract post details
    const { newDescription, newImage } = req.body;

    // Creating an object with updated post details
    const updatePost = {
      description: newDescription,
      image: newImage,
    };

    // Finding and updating the post by ID
    await postSchema.findByIdAndUpdate(postId, updatePost, { new: true });

    console.log("update Post:", updatePost);

    if (!updatePost) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Sending success response with status code 201 and a message
    return res.status(201).json({ message: "Post updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Post update failed", details: err.message });
  }
};
