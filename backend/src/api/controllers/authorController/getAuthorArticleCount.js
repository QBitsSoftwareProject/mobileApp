const article = require("../../models/articleResources/article");

// getting all articles
exports.getAuthorArticleCount = async (req, res) => {
    try {
        const { authorId } = req.params;
        const articlesOfAuthors = await article.find({ author: authorId });
        let articleCount;
        if (articleCount != 0) {
            articleCount = articlesOfAuthors.length;
        }
        return res.status(201).json(articleCount);
    } catch (err) {
        return res.status(500).json({ errorMsg: "failed to fetch author's articles" });
    }
};