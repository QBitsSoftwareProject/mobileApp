const postSchema = require("../../models/posts/postsModels");

exports.getPost = async (req, res) => {
  try {
    const relevantPosts = await postSchema.find().populate("userId");

    if (!relevantPosts) {
      return res.status(404).json({ message: "Appointments not found!" });
    }

    return res.status(201).json(relevantPosts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch!", error: err });
  }
};
