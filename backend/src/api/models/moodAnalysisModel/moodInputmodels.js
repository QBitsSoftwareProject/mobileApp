// models/moodEntry.js
const mongoose = require("mongoose");

const MoodEntrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "RegularUser",
  },
  selectedEmoji: {
    type: String,
    required: true,
  },
  moodText: {
    type: String,
    required: true,
  },

  time: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("MoodEntry", MoodEntrySchema);
