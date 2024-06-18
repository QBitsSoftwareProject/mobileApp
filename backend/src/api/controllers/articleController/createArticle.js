const article = require("../../models/articleResources/article");

//create new article
exports.createArticle = async (req, res) => {
  try {
    const { title, author, paragraphs, tags } = req.body;
    const newArticle = new article({ title, author, paragraphs, tags });
    await newArticle.save();
    return res.status(201).json("article saved successfully");
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ errorMsg: "article save failed", error: err.message });
  }
};
