const express = require("express");

const auth = require("../../middlewares/auth");
const adminAuth = require("../../middlewares/adminAuth");

const {
  createAudio,
} = require("../../controllers/audioController/createAudio");

const {
  deleteAudio,
} = require("../../controllers/audioController/deleteAudio");

const {
  getAllAudios,
  getAnAudio,
} = require("../../controllers/audioController/getAllAudios");

const {
  updateAudio,
} = require("../../controllers/audioController/updateAudio");

const { getAudioTags } = require("../../controllers/audioController/getAudioTags");

const { filterAudios } = require("../../controllers/audioController/filterAudios");

const { getAudiosBySearchAndCategory } = require("../../controllers/audioController/getAudiosBySearchAndCategory");
const { getAudiosBySearch } = require("../../controllers/audioController/getAudiosBySearch");
const { getFavoriteAudios } = require("../../controllers/audioController/getFavoriteAudios");

const router = express.Router();

router.post("/", adminAuth, createAudio);  // create new audio
router.get("/getAudios/", getAllAudios); // fetch all audios
router.post("/getFavoriteAudios/",auth, getFavoriteAudios); // fetch all audios
router.get("/getAudios/search/:keyword", auth, getAudiosBySearch); // fetch all audios by search
router.get("/getAudios/search-and-category/:keywordAndCategory", auth, getAudiosBySearchAndCategory); // fetch all audios by search and category
router.get("/getAudios/:category", auth, filterAudios); // fetch all audios by category
router.get("/get-one-audio/:id", auth, getAnAudio); // fetch an audio 
router.delete("/:id", adminAuth, deleteAudio); // delete audio file
router.put("/edit-audio/:id", adminAuth, updateAudio); // update audio file
router.get("/get-audio-tags", auth, getAudioTags); // get audio tags

module.exports = router;
