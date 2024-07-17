const audio = require("../../models/audioResources/audio");

// get all audio files or specific videos by ID
exports.getFavoriteAudios = async (req, res) => {
    try {
        // Check if audioIds array is provided in the request body
        const audioIds = req.body;

        // Query to fetch all audios or specific audios based on IDs
        let query = {};

        if (audioIds && Array.isArray(audioIds)) {
            query = { _id: { $in: audioIds } };
        }

        // Fetch audios based on the query
        const allAudios = await audio.find(query).sort({ createdAt: -1 });

        if (!allAudios || allAudios.length === 0) {
            return res.status(404).json({ msg: "audios not found" });
        }

        return res.status(200).json(allAudios);
    } catch (err) {
        return res.status(500).json({ errorMsg: "failed to fetch audios", error: err });
    }
};
