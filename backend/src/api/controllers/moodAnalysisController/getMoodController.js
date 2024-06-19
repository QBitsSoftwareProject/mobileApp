const MoodEntry = require("../../models/moodAnalysisModel/moodInputmodels");
const MoodEntryService = require("../../services/moodAnalysisService/moodAnalysisService");

const asyncHandler = require("express-async-handler");

//get journal by user id
const getMoodEntryByUserId = asyncHandler(async (req, res) => {
  try {
    const userId = req.user.user_id;

    // Find the question by ID and populate the options
    const existingMoodEntry = await MoodEntryService.getMoodEntryByUserId(
      userId
    );

    if (existingMoodEntry) {
      res.status(200).json(existingMoodEntry);
    } else {
      res.status(404).json({ error: "Mood Entry not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = {
  getMoodEntryByUserId,
};
