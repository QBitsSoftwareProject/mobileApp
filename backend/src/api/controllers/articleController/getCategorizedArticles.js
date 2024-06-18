const article = require("../../models/articleResources/article");

// getting all articles
exports.getCategorizedArticles = async (req, res) => {
    try {
        const { category } = req.params;
        const allArticles = await article.find({tags:category});

        if (!allArticles) {
            return res.status(404).json({ msg: "article not found" });
        }

        return res.status(201).json(allArticles);
    } catch (err) {
        return res.status(500).json({ errorMsg: "failed to fetch articles" });
    }
};