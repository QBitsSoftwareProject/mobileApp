const video = require("../../models/videoResources/video");

// get all video files
exports.getVideosBySearch = async (req, res) => {
  try {
    const { keyword } = req.params;

    const allVideos = await video.find({ title: new RegExp(keyword, "i") });

    if (allVideos.length === 0) {
      return res.status(404).json({ msg: "videos not found" });
    }

    return res.status(200).json(allVideos);
  } catch (err) {
    return res
      .status(500)
      .json({ errorMsg: "failed to fetch videos", error: err });
  }
};
