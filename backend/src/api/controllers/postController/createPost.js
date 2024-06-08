const PostSchema = require("../../models/posts/postsModels");
exports.createPost = async (req, res) => {
  try {
    const { postCategory, date, time, description, image } = req.body;
    const userId = req.user.user_id;

    const newPost = new PostSchema({
      userId: userId,
      postCategory,
      date,
      time,
      description,
      image,
    });

    await newPost.save();

    return res.status(201).json("New appointment succesfully created!");
  } catch (error) {
    console.error(error);
    return res.status(500).json("New appointment created unsuccsess!");
  }
};
