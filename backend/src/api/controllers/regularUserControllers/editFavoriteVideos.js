const regularUser = require("../../models/regularUser/regularUser");


exports.editFavoriteVideos = async (req, res) => {
    try {
        const { videoId } = req.body;
        const userId = req.user.user_id;

        // Finding and updating the user by ID
        const user = await regularUser.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }

        let updateVideos = [];
        let count = 0;

        user.favVideos.map((item) => {
            if (item != videoId) {
                updateVideos.push(item);
            } else {
                count++;
            }
        });

        if (count == 0) {
            updateVideos.push(videoId);
        }

        user.favVideos = updateVideos;
        await regularUser.findByIdAndUpdate(userId, user);

        if (count == 0) {
            return res
                .status(201)
                .json({ message: "Favorite video added", videoArray: user.favVideos });
        } else {
            return res
                .status(201)
                .json({ message: "Video has been removed", videoArray: user.favVideos });
        }

    } catch (err) {
        res
            .status(500)
            .json({ error: "Error in updating favorites pool", details: err });
    }
};