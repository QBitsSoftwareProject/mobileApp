// models/moodEntry.js
const mongoose = require('mongoose');

const MoodEntrySchema = new mongoose.Schema({
    userid:{
        type: String,
        required: true
    },
    selectedEmoji: {
        type: String,
        required: true
    },
    moodText: {
        type: String,
        required: true
    },
    
    time: {
        type: String,
        required:true
    },
    date: {
        type: String,
        required:true
    },
    count:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('MoodEntry', MoodEntrySchema);



