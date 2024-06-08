const postSchema = require("../../models/posts/postsModels");

exports.getPost = async (req, res) => {
  try {
    const Posts = await postSchema.find().populate("userId");

    if (!Posts) {
      return res.status(404).json({ message: "Appointments not found!" });
    }

    return res.status(201).json(Posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch!", error: err });
  }
};
