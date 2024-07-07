const regularUser = require("../../models/regularUser/regularUser");


exports.editFavoriteArticles = async (req, res) => {
    try {
        const favoriteArticles = req.body;
        const userId = req.params;

        // Finding and updating the user by ID
        await regularUser.findByIdAndUpdate(userId.id, { favArticles: favoriteArticles });

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