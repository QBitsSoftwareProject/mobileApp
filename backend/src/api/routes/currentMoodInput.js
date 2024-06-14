const express = require("express");
const router = express.Router();


const{
    storeMood,
    updateCurrentMood,
    getMoodById

} = require("../controllers/immediateCurrentMood/currentMoodInput");



router.post("/add-mood", storeMood);
router.get("/get-mood-by-id/:userid",getMoodById);
router.post("/update-current-mood/:userid",updateCurrentMood);

module.exports = router;