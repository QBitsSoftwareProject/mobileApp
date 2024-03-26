const MoodEntry = require('../../models/moodInput.models');


// Controller to get all mood entries
const getAllMoodEntries = async (req, res) => {
    
    try {
        const moodEntries = await MoodEntry.find();
        res.status(200).json(moodEntries);
    
    } catch (error) {
        console.error('Error fetching mood entries:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllMoodEntries
}