const MoodEntry = require('../models/moodInput.models');

// Service function to create a new mood entry
exports.createMoodEntry = async (selectedEmoji, moodText, imageSource) => {
    
    try {
        const moodEntry = new MoodEntry({ selectedEmoji, moodText, imageSource });
       
        return moodEntry;
        
    } catch (error) {
        console.error('Error creating mood entry:', error);
        throw new Error('Failed to create mood entry');
    }
};

