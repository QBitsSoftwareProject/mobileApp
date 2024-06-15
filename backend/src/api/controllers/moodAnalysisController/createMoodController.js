const MoodEntry = require("../../models/moodAnalysisModel/moodInputmodels");
const MoodEntryService = require("../../services/moodAnalysisService/moodAnalysisService");

const asyncHandler = require("express-async-handler");

// Controller to create a new mood entry
const storeMoodEntry = asyncHandler(async (req, res) => {
  try {
    const { selectedEmoji, moodText, time, date, count } = req.body;

    const userId = req.user.user_id;
    const userName = req.user.userName;

    // console.log("recived selectedEmoji: ", selectedEmoji);
    // console.log("recived moodText: ", moodText);
    // console.log("recived time: ", time);
    // console.log("recived date: ", date);
    // console.log("receive all");

    const newMoodEntry = await MoodEntryService.createMoodEntry(
      userId,
      selectedEmoji,
      moodText,
      time,
      date,
      count
    );

    console.log("New MoodEntry:", newMoodEntry);

    res.status(201).json({
      message: "Mood added successfully",
      moodEntry: newMoodEntry,
    });
  } catch (error) {
    console.error("Error creating mood entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = {
  storeMoodEntry,
};
