const postSchema = require("../../models/posts/postsModels");
const userSchema = require("../../models/regularUser/regularUser");
const doctorSchema = require("../../models/doctor/doctor");

exports.getPost = async (req, res) => {
  try {
    const { lastCreatedAt, limit } = req.query;
    // console.log(lastCreatedAt, limit);

    const Posts = await postSchema
      .find({
        ...(lastCreatedAt && { createdAt: { $lt: new Date(lastCreatedAt) } }),
      }) // only posts with a createdAt timestamp less than ($lt) the lastCreatedAt date
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .populate("userId");

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

exports.getProfilePost = async (req, res) => {
  try {
    const userId = req.query.userId || req.user.user_id;

    const posts = await postSchema
      .find({ userId: userId })
      .sort({ createdAt: -1 })
      .populate("userId");

    if (!posts) {
      return res.status(404).json({ error: "Post not found!" });
    }
    return res.status(201).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch!", error: err });
  }
};

exports.getSearchProfile = async (req, res) => {
  try {
    const { userName, list } = req.body;

    let searchResult;
    if (list == "profile") {
      searchResult = await userSchema.find({
        userName: new RegExp(userName, "i"),
      });
    } else if (list == "doctor") {
      searchResult = await doctorSchema.find({
        userName: new RegExp(userName, "i"),
        regStatus: true,
        access: true,
      });
    }

    // console.log(searchResult);

    if (!searchResult) {
      return res.status(404).json({ message: "User not found!" });
    }
    const userData = [];

    searchResult.map((item) => {
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
