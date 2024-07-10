const express = require("express");

const auth = require("../../middlewares/auth");
const adminAuth = require("../../middlewares/adminAuth");

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

const {
  getAllFilteredVideos,
} = require("../../controllers/videoController/getFilteredVideos");

const {
  getVideosBySearch,
} = require("../../controllers/videoController/getVideosBySearch");
const {
  getFavoriteVideos,
} = require("../../controllers/videoController/getFavoriteVideos");

const router = express.Router();

router.post("/", auth, adminAuth, createVideo); // create video

router.get("/", auth, getAllVideos); // get all videos

router.get("/search/:keyword", auth, getVideosBySearch); // get all videos

router.get("/getFilteredVideos/:category", auth, getAllFilteredVideos); // get all videos

router.post("/getFavoriteVideos/", auth, getFavoriteVideos); // get favorite videos

router.get("/:id", auth, getAVideo); // get a video

router.put("/edit-video/:id", auth, adminAuth, updateVideo); // update video

router.delete("/:id", auth, adminAuth, deleteVideo); // delete a video

module.exports = router;
