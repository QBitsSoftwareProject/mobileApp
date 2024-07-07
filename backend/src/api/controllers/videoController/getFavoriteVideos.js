const video = require("../../models/videoResources/video");

// get all video files or specific videos by ID
exports.getFavoriteVideos = async (req, res) => {
    try {
        // Check if videoIds array is provided in the request body
        const  videoIds  = req.body;

        console.log("video ids backend:", videoIds);

        // Query to fetch all videos or specific videos based on IDs
        let query = {};

        if (videoIds && Array.isArray(videoIds)) {
            query = { _id: { $in: videoIds } };
        }

        // Fetch videos based on the query
        const allVideos = await video.find(query).sort({ createdAt: -1 });

        if (!allVideos || allVideos.length === 0) {
            return res.status(404).json({ msg: "videos not found" });
        }

        return res.status(200).json(allVideos);
    } catch (err) {
        return res.status(500).json({ errorMsg: "failed to fetch videos", error: err });
    }
};
