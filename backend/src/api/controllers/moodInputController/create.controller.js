const MoodEntry = require('../../models/moodInput.models');
const MoodEntryService = require('../../services/moodInput.services')

// Controller to create a new mood entry
const createMoodEntry = async (req, res) => {
    
    
    try {
        const { selectedEmoji, moodText, imageSource } = req.body;
        const moodEntry = MoodEntryService.createMoodEntry({selectedEmoji, moodText, imageSource}) // connetc to the service
        res.status(201).json(moodEntry);


    } catch (error) {
        console.error('Error creating mood entry:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = {
 
    createMoodEntry
}

