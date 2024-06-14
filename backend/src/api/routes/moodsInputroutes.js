const express = require("express");
const router = express.Router();
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
router.post("/mood-create", storeMoodEntry);

// Route to get mood entry by id
router.get("/mood-entries-get/:userId", getMoodEntryByUserId);

// Route to update mood entry by id
router.post("/mood-entries-update/:id", updateMoodEntry);

module.exports = router;
