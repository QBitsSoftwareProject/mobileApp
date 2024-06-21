const express = require("express");

const {
  createVideo,
} = require("../../controllers/videoController/createVideo");

const {
  getAllVideos,
  getAVideo,
} = require("../../controllers/videoController/getAllVideos");

const {
  deleteVideo,
} = require("../../controllers/videoController/deleteVideo");

const {
  updateVideo,
} = require("../../controllers/videoController/updateVideo");

const { getAllFilteredVideos } = require("../../controllers/videoController/getFilteredVideos");
const { getVideosBySearch } = require("../../controllers/videoController/getVideosBySearch");

const router = express.Router();

router.post("/", createVideo); // create video

router.get("/", getAllVideos); // get all videos

router.get("/search/:keyword", getVideosBySearch); // get all videos

router.get("/getFilteredVideos/:category", getAllFilteredVideos); // get all videos

router.get("/:id", getAVideo); // get a video

router.put("/:id", updateVideo); // update video

router.delete("/:id", deleteVideo); // delete a video

module.exports = router;
