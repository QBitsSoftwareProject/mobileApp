const MoodEntry = require("../../models/moodAnalysisModel/moodInputmodels");
const MoodEntryService = require("../../services/moodAnalysisService/moodAnalysisService");

const asyncHandler = require("express-async-handler");

// update journal by id
const updateMoodEntry = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const checkInstance = await MoodEntry.findById(id);

  if (checkInstance) {
    const response = await MoodEntry.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (response) {
      res.status(200).json(response);
    } else {
      res.status(403).json("mood cannot be update");
    }
  } else {
    res.status(404).json("mood does not exists");
  }
});

module.exports = {
  updateMoodEntry,
};
