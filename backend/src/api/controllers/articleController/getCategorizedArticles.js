const article = require("../../models/articleResources/article");

// getting all articles
exports.getCategorizedArticles = async (req, res) => {
    try {
        const { category } = req.params;
        const allArticles = await article.find({ tags: category });

        if (!allArticles) {
            return res.status(404).json({ msg: "article not found" });
        }

        return res.status(201).json(allArticles);
    } catch (err) {
        return res.status(500).json({ errorMsg: "failed to fetch articles" });
    }
};

// getting all articles
exports.getCategorizedArticlesBySearch = async (req, res) => {
    try {

        const { keyword, category } = req.params;

        const query = {
            title: new RegExp(`^${keyword}`, 'i'),
            tags: category
        };

        const allArticles = await article.find(query);

        if (!allArticles || allArticles.length === 0) {
            return res.status(404).json({ msg: "articles not found" });
        }

        return res.status(201).json(allArticles);
    } catch (err) {
        return res.status(500).json({ errorMsg: "failed to fetch articles" });
    }
};