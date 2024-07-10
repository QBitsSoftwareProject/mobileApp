const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");

const {
  storeMoodEntry,
} = require("../controllers/moodAnalysisController/createMoodController");

const {
  updateMoodEntry,
} = require("../controllers/moodAnalysisController/updateMoodController");

const {
  getMoodEntryByUserId,
} = require("../controllers/moodAnalysisController/getMoodController");

// Route to create a new mood entry
router.post("/mood-create", auth, storeMoodEntry);

// Route to get mood entry by id
router.get("/mood-entries-get", auth, getMoodEntryByUserId);

// Route to update mood entry by id
router.post("/mood-entries-update/:id", auth, updateMoodEntry);

module.exports = router;
