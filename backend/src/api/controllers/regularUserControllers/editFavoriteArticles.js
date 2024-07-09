const regularUser = require("../../models/regularUser/regularUser");


exports.editFavoriteArticles = async (req, res) => {
    try {
        const { favoriteArticles } = req.body;
        const userId = req.params;

        // Finding and updating the user by ID
        const user = await regularUser.findById(userId.id);

        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }

        let updateArticles = [];
        let count = 0;

        // user.favArticles.push(favoriteArticles);
        console.log("user favArticles:", user.favArticles);
        user.favArticles.map((item) => {
            if (item != favoriteArticles) {
                updateArticles.push(item);
            } else {
                count++;
            }
        });

        if (count == 0) {
            updateArticles.push(favoriteArticles);
        }
        console.log("user updated articles:",updateArticles);

        user.favArticles = updateArticles;
        await user.save();

        // Sending success response with status code 201 and a message
        return res
            .status(201)
            .json({ message: "Favorites pool updated" });
    } catch (err) {
        res
            .status(500)
            .json({ error: "Error in updating favorites pool", details: err });
    }
};