const video = require("../../models/videoResources/video");

// update video file
exports.updateVideo = async (req, res) => {
  try {
    const { title, tags } = req.body;
    const { id } = req.params;

    const updatedVideoDetails = {
      title,
      tags,
    };

    console.log("video id:", id);
    console.log("video details:", updatedVideoDetails);

    const updatedVideo = await video.findByIdAndUpdate(id, updatedVideoDetails);

    if (!updatedVideo) {
      return res.status(404).json({ message: "video could not be found" });
    }

    return res.status(201).json(updatedVideo);

  } catch (err) {

    return res
      .status(500)
      .json({ errorMsg: "video update failed", error: err });

  }
};
