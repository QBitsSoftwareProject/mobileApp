const express = require("express");

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

const router = express.Router();

router.post("/", createAudio);  // create new audio
router.get("/getAudios/", getAllAudios); // fetch all audios
router.get("/getAudios/search/:keyword", getAudiosBySearch); // fetch all audios by search
router.get("/getAudios/search-and-category/:keywordAndCategory", getAudiosBySearchAndCategory); // fetch all audios by search and category
router.get("/getAudios/:category", filterAudios); // fetch all audios by category
router.get("/get-one-audio/:id", getAnAudio); // fetch an audio 
router.delete("/:id", deleteAudio); // delete audio file
router.put("/:id", updateAudio); // update audio file
router.get("/get-audio-tags", getAudioTags); //get audio tags

module.exports = router;
