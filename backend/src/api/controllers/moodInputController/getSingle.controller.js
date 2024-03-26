const MoodEntry = require('../models/moodInput.models');

// Controller to get a single mood entry by ID
const getMoodEntryById = async (req, res) => {
    try {
        const { id } = req.params;
        const moodEntry = await MoodEntry.findById(id);
        
        if (!moodEntry) {
            return res.status(404).json({ error: 'Mood entry not found' });
        }

        res.status(200).json(moodEntry);
    
    } catch (error) {
        console.error('Error fetching mood entry by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports={
    getMoodEntryById
}