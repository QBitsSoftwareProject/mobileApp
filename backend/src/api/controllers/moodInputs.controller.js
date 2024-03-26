// const MoodEntry = require('../models/moodInput.models');
// const MoodEntryService = require('../services/moodInput.services')

// // Controller to create a new mood entry
// exports.createMoodEntry = async (req, res) => {
//     try {
//         const { selectedEmoji, moodText, imageSource } = req.body;
//         const moodEntry = await MoodEntryService.createMoodEntry({selectedEmoji, moodText, imageSource })
       
  
//         res.status(201).json(moodEntry);
        
//     } catch (error) {
//         console.error('Error creating mood entry:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// // Controller to get all mood entries
// exports.getAllMoodEntries = async (req, res) => {
//     try {
//         const moodEntries = await MoodEntry.find();
//         res.status(200).json(moodEntries);
//     } catch (error) {
//         console.error('Error fetching mood entries:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// // Controller to get a single mood entry by ID
// exports.getMoodEntryById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const moodEntry = await MoodEntry.findById(id);
//         if (!moodEntry) {
//             return res.status(404).json({ error: 'Mood entry not found' });
//         }
//         res.status(200).json(moodEntry);
//     } catch (error) {
//         console.error('Error fetching mood entry by ID:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };



