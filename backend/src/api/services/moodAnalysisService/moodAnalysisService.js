const MoodEntry = require("../../models/moodAnalysisModel/moodInputmodels");

// Service function to create a new mood entry
const createMoodEntry = (
  userId,
  selectedEmoji,
  moodText,
  time,
  date,
  count
) => {
  try {
    if (!userId || !selectedEmoji || !moodText || !time || !date || !count) {
      throw new Error("Incomplete data provided");
    }
    //create new model and save data to it
    const newMoodEntry = MoodEntry.create({
      userId: userId,
      selectedEmoji: selectedEmoji,
      moodText: moodText,
      time: time,
      date: date,
      count: count,
    });

    return newMoodEntry;
  } catch (error) {
    console.error("Error creating mood entry:", error);
    throw new Error("Failed to create mood entry");
  }
};

// filter journals by userId
const getMoodEntryByUserId = (userId) => {
  try {
    const MoodInput = MoodEntry.find({ userId: userId });
    return MoodInput || null;
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};

module.exports = {
  createMoodEntry,
  getMoodEntryByUserId,
};
