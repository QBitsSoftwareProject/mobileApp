const PostSchema = require("../../models/posts/postsModels");
exports.createPost = async (req, res) => {
  try {
    const { postCategory, description, image } = req.body;
    const userId = req.user.user_id;

    const createdAt = new Date();

    const newPost = new PostSchema({
      userId,
      postCategory,
      description,
      createdAt: createdAt,
      image,
    });

    await newPost.save();

    return res.status(201).json("New post succesfully created!");
  } catch (error) {
    console.error(error);
    return res.status(500).json("New post created unsuccsess!");
  }
};
