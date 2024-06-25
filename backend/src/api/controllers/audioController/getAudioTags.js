const audio = require("../../models/audioResources/audio");

exports.getAudioTags = async (req, res) => {
    try {
        const audios = await audio.find();
        const audioTags = audios.flatMap(item => item.tags); // Flatten the nested arrays
        const uniqueTags = [...new Set(audioTags)]; // Remove duplicates
        res.status(200).json({ tags: uniqueTags });
    } catch (err) {
        res.status(500).json({ message: 'audio tag fetch failed', error: err.message });
    }
}
