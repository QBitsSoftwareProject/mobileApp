const article = require("../../models/articleResources/article");

// getting all articles
exports.getAllArticles = async (req, res) => {
  try {
    const allArticles = await article.find();

    if (!allArticles) {
      return res.status(404).json({ msg: "articles not found" });
    }

    return res.status(201).json(allArticles);
  } catch (err) {
    return res.status(500).json({ errorMsg: "failed to fetch articles" });
  }
};

// getting all articles by search
exports.getAllArticlesBySearch = async (req, res) => {
  try {
    const { keyword } = req.params;

    // Construct the query
    const query = {
      title: new RegExp(`^${keyword}`, 'i'),
    };

    const allArticles = await article.find(query);

    if (!allArticles) {
      return res.status(404).json({ msg: "articles not found" });
    }

    return res.status(201).json(allArticles);
  } catch (err) {
    return res.status(500).json({ errorMsg: "failed to fetch articles" });
  }
};

// getting all articles
exports.getAuthorArticles = async (req, res) => {

  try {
    const { authorId } = req.params;
    const articlesOfAuthors = await article.find({ author: authorId });
    return res.status(201).json(articlesOfAuthors);
  } catch (err) {
    return res.status(500).json({ errorMsg: "failed to fetch author's articles" });
  }

};

// getting article by id
exports.getAnArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const getArticle = await article.findById(id);

    if (!getArticle) {
      return res.status(404).json("article not found");
    }

    return res.status(201).json(getArticle);
  } catch (err) {
    return res
      .status(500)
      .json({ errorMsg: "failed to fetch article", error: err });
  }
};
