const regularUser = require("../../models/regularUser/regularUser");


exports.editFavoriteArticles = async (req, res) => {
    try {
        const { articleId } = req.body;
        const userId = req.user.user_id;

        // Finding and updating the user by ID
        const user = await regularUser.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }

        let updateArticles = [];
        let count = 0;

        user.favArticles.map((item) => {
            if (item != articleId) {
                updateArticles.push(item);
            } else {
                count++;
            }
        });

        if (count == 0) {
            updateArticles.push(articleId);
        }

        user.favArticles = updateArticles;
        await regularUser.findByIdAndUpdate(userId, user);

        if (count == 0) {
            return res
                .status(201)
                .json({ message: "Favorite article added", articleArray: user.favArticles });
        } else {
            return res
                .status(201)
                .json({ message: "Article has been removed", articleArray: user.favArticles });
        }

    } catch (err) {
        res
            .status(500)
            .json({ error: "Error in updating favorites pool", details: err });
    }
};