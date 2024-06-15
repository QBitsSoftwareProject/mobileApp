const commentsSchema = require("../../models/comments/commentsModels");
exports.createComment = async (req, res) => {
  try {
    const { postId, content } = req.body;

    // const userId = req.user.user_id;

    const createdAt = new Date();

    const newcomment = new commentsSchema({
      postId,
      createdAt: createdAt,
      content,
    });

    await newcomment.save();

    return res.status(201).json("New comment succesfully created!");
  } catch (error) {
    console.error(error);
    return res.status(500).json("New comment created unsuccsess!");
  }
};
