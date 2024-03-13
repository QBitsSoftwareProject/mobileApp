const MoodEntry = require('../models/moodInput.models');

// Controller to create a new mood entry
exports.createMoodEntry = async (req, res) => {
    try {
        const { selectedEmoji, moodText, imageSource } = req.body;
        const moodEntry = new MoodEntry({ selectedEmoji, moodText, imageSource });
        const savedEntry = await moodEntry.save();
        res.status(201).json(savedEntry);
    } catch (error) {
        console.error('Error creating mood entry:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller to get all mood entries
exports.getAllMoodEntries = async (req, res) => {
    try {
        const moodEntries = await MoodEntry.find();
        res.status(200).json(moodEntries);
    } catch (error) {
        console.error('Error fetching mood entries:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller to get a single mood entry by ID
exports.getMoodEntryById = async (req, res) => {
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

// Controller to update a mood entry by ID
// exports.updateMoodEntryById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { selectedEmoji, moodText, imageSource } = req.body;
//         const updatedEntry = await MoodEntry.findByIdAndUpdate(
//             id,
//             { selectedEmoji, moodText, imageSource },
//             { new: true }
//         );
//         if (!updatedEntry) {
//             return res.status(404).json({ error: 'Mood entry not found' });
//         }
//         res.status(200).json(updatedEntry);
//     } catch (error) {
//         console.error('Error updating mood entry by ID:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// Controller to delete a mood entry by ID
exports.deleteMoodEntryById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEntry = await MoodEntry.findByIdAndDelete(id);
        if (!deletedEntry) {
            return res.status(404).json({ error: 'Mood entry not found' });
        }
        res.status(204).send(); // No content
    } catch (error) {
        console.error('Error deleting mood entry by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
