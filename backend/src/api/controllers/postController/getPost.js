const postSchema = require("../../models/posts/postsModels");

exports.getPost = async (req, res) => {
  try {
    const Posts = await postSchema.find().sort({ createdAt: -1 }); //.populate({userId:userId})

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

exports.getSearchProfile = async (req, res) => {
  try {
    const userNameText = req.body.userName;

    const searchProfile = await postSchema.find({
      userName: new RegExp(userNameText, "i"),
    });

    if (!searchProfile) {
      return res.status(404).json({ message: "User not found!" });
    }
    const userData = [];

    searchProfile.map((item) => {
      userData.push({
        userId: item._id,
        userName: item.userName,
        userProPic: item.proPic,
      });
    });
    return res.status(201).json(userData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch!", error: err });
  }
};
