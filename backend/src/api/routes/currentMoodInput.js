const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const{
    storeMood,
    updateCurrentMood,
    getMoodById

} = require("../controllers/immediateCurrentMood/currentMoodInput");



router.post("/add-mood",auth, storeMood);
router.get("/get-mood-by-id",auth,getMoodById);
router.post("/update-current-mood",auth,updateCurrentMood);

module.exports = router;