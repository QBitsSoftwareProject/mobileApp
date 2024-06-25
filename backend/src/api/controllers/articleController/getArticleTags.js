const article = require("../../models/articleResources/article");

exports.getArticleTags = async (req, res) => {
    try {
        const articles = await article.find();
        const articleTags = articles.flatMap(item => item.tags); // Flatten the nested arrays
        const uniqueTags = [...new Set(articleTags)]; // Remove duplicates
        res.status(200).json({ tags: uniqueTags });
    } catch (err) {
        res.status(500).json({ message: 'audio tag fetch failed', error: err.message });
    }
}
