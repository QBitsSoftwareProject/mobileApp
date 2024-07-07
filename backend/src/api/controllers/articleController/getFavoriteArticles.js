const article = require("../../models/articleResources/article");

// get all article files or specific articles by ID
exports.getFavoriteArticles = async (req, res) => {
    try {
        // Check if articleIds array is provided in the request body
        const { articleIds } = req.body;

        // Query to fetch all articles or specific articles based on IDs
        let query = {};

        if (articleIds && Array.isArray(articleIds)) {
            query = { _id: { $in: articleIds } };
        }

        // Fetch articles based on the query
        const allArticles = await article.find(query).sort({ createdAt: -1 });

        if (!allArticles || allArticles.length === 0) {
            return res.status(404).json({ msg: "articles not found" });
        }

        return res.status(200).json(allArticles);
    } catch (err) {
        return res.status(500).json({ errorMsg: "failed to fetch articles", error: err });
    }
};
