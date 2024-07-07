const regularUser = require("../../models/regularUser/regularUser");


exports.editFavoriteVideos = async (req, res) => {
    try {
        const favoriteVideos = req.body;
        const userId = req.params;

        // Finding and updating the user by ID
        await regularUser.findByIdAndUpdate(userId.id, { favVideos: favoriteVideos });

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