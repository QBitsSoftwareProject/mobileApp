const regularUser = require("../../models/regularUser/regularUser");


exports.editFavoriteAudios = async (req, res) => {
    try {
        const { audioId } = req.body;
        const userId = req.user.user_id;

        // Finding and updating the user by ID
        const user = await regularUser.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }

        let updateAudios = [];
        let count = 0;

        user.favAudios.map((item) => {
            if (item != audioId) {
                updateAudios.push(item);
            } else {
                count++;
            }
        });

        if (count == 0) {
            updateAudios.push(audioId);
        }

        user.favAudios = updateAudios;
        await regularUser.findByIdAndUpdate(userId, user);

        if (count == 0) {
            return res
                .status(201)
                .json({ message: "Favorite audio added", audioArray: user.favAudios });
        } else {
            return res
                .status(201)
                .json({ message: "Audio has been removed", audioArray: user.favAudios });
        }

    } catch (err) {
        res
            .status(500)
            .json({ error: "Error in updating favorites pool", details: err });
    }
};