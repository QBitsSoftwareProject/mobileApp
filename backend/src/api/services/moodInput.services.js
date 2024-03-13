const MoodEntry = require('../models/moodInput.models');

// Service function to create a new mood entry
exports.createMoodEntry = async (selectedEmoji, moodText, imageSource) => {
    try {
        const moodEntry = new MoodEntry({ selectedEmoji, moodText, imageSource });
        const savedEntry = await moodEntry.save();
        return savedEntry;
    } catch (error) {
        console.error('Error creating mood entry:', error);
        throw new Error('Failed to create mood entry');
    }
};

// Service function to get all mood entries
exports.getAllMoodEntries = async () => {
    try {
        const moodEntries = await MoodEntry.find();
        return moodEntries;
    } catch (error) {
        console.error('Error fetching mood entries:', error);
        throw new Error('Failed to fetch mood entries');
    }
};

// Service function to get a single mood entry by ID
exports.getMoodEntryById = async (id) => {
    try {
        const moodEntry = await MoodEntry.findById(id);
        if (!moodEntry) {
            throw new Error('Mood entry not found');
        }
        return moodEntry;
    } catch (error) {
        console.error('Error fetching mood entry by ID:', error);
        throw new Error('Failed to fetch mood entry by ID');
    }
};

// Service function to update a mood entry by ID
// exports.updateMoodEntryById = async (id, selectedEmoji, moodText, imageSource) => {
//     try {
//         const updatedEntry = await MoodEntry.findByIdAndUpdate(
//             id,
//             { selectedEmoji, moodText, imageSource },
//             { new: true }
//         );
//         if (!updatedEntry) {
//             throw new Error('Mood entry not found');
//         }
//         return updatedEntry;
//     } catch (error) {
//         console.error('Error updating mood entry by ID:', error);
//         throw new Error('Failed to update mood entry by ID');
//     }
// };

// Service function to delete a mood entry by ID
exports.deleteMoodEntryById = async (id) => {
    try {
        const deletedEntry = await MoodEntry.findByIdAndDelete(id);
        if (!deletedEntry) {
            throw new Error('Mood entry not found');
        }
        return true;
    } catch (error) {
        console.error('Error deleting mood entry by ID:', error);
        throw new Error('Failed to delete mood entry by ID');
    }
};
