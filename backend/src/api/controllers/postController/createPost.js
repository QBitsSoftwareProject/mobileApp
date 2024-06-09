const PostSchema = require("../../models/posts/postsModels");
exports.createPost = async (req, res) => {
  try {
    const { userId, postCategory, createdAt, description, image } = req.body;

    // const userId = req.user.user_id;

    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }

    const newPost = new PostSchema({
      userId,
      postCategory,
      createdAt,
      description,
      image,
    });

    await newPost.save();

    return res.status(201).json("New post succesfully created!");
  } catch (error) {
    console.error(error);
    return res.status(500).json("New post created unsuccsess!");
  }
};
