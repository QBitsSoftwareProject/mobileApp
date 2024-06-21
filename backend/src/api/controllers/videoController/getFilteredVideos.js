const video = require("../../models/videoResources/video");

// get all video files
exports.getAllFilteredVideos = async (req, res) => {
    try {
        const { category } = req.params;
        const allVideos = await video.find({ tags: category.toLowerCase() });
        if (!allVideos) {
            return res.status(404).json({ msg: "videos not found" });
        }
        return res.status(201).json(allVideos);
    } catch (err) {
        return res.status(500).json({ errorMsg: "failed to fetch videos", error: err });
    }
};