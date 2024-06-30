const audio = require("../../models/audioResources/audio");

// getting all audios
exports.getAudiosBySearchAndCategory = async (req, res) => {
  try {
    const { keyword, category } = req.params;

    // Construct the query
    const query = {
      title: new RegExp(keyword, "i"),
      tags: category,
    };

    const allAudios = await audio.find(query);

    if (!allAudios || allAudios.length === 0) {
      return res.status(404).json({ msg: "audio not found" });
    }

    return res.status(200).json(allAudios);
  } catch (err) {
    return res
      .status(500)
      .json({ errorMsg: "failed to fetch audios", error: err });
  }
};
