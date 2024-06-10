const postSchema = require("../../models/posts/postsModels");

exports.getPost = async (req, res) => {
  try {
    const Posts = await postSchema.find();

    if (!Posts) {
      return res.status(404).json({ message: "Post not found!" });
    }

    return res.status(201).json(Posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch!", error: err });
  }
};

exports.getAPost = async (req, res) => {
  const { postId } = req.params;

  try {
    const Posts = await postSchema.findById(postId);

    if (!Posts) {
      return res.status(404).json({ message: "Post not found!" });
    }

    return res.status(201).json(Posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch!", error: err });
  }
};

exports.getUpdatedPost = async (req, res) => {
  try {
    const { userId } = req.params;
    const Posts = await postSchema.findById({ userId: userId });

    if (!Posts) {
      return res.status(404).json({ message: "Post not found!" });
    }

    return res.status(201).json(Posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch!", error: err });
  }
};
