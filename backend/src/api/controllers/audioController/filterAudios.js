const audio = require("../../models/audioResources/audio");

// getting all audios
exports.filterAudios = async (req, res) => {
    try {
        const { category } = req.params;
        const allAudios = await audio.find({ tags: category });
        if (!allAudios) {
            return res.status(404).json({ msg: "audio not found" });
        }
        return res.status(201).json(allAudios);
    } catch (err) {
        return res.status(500).json({ errorMsg: "failed to fetch audios", error: err });
    }
};