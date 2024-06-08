const postsModels = require("../../models/posts/postsModels");

exports.updatePost = async (req, res) => {
  try {
    // Destructuring the request body to extract user details
    const { newImage, newDescription } = req.body;

    // Extracting the user ID from request parameters
    const { id } = req.params;

    // Creating an object with updated user details
    const updatePost = {
      image: newImage,
      description: newDescription,
    };

    // Finding and updating the user by ID
    await postsModels.findByIdAndUpdate(id, updatePost);

    // Sending success response with status code 201 and a message
    return res.status(201).json({ message: "Post updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Post update failed", details: err.message });
  }
};
