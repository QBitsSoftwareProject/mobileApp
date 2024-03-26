const mongoose = require('mongoose');

const moodEntrySchema = new mongoose.Schema({
    selectedEmoji: String,
    moodText: String,
    imageSource: String,
    timestamp: { type: Date, default: Date.now }
});

const MoodEntry = mongoose.model('MoodEntry', moodEntrySchema);

module.exports = MoodEntry;



