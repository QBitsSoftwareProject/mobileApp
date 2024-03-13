const express = require('express');
const router = express.Router();
const moodEntryController = require('../controllers/moodInputs.controller');

// Route to create a new mood entry
router.post('/mood-entries', moodEntryController.createMoodEntry);

// Route to get all mood entries
router.get('/mood-entries', moodEntryController.getAllMoodEntries);

// Route to get a single mood entry by ID
router.get('/mood-entries/:id', moodEntryController.getMoodEntryById);



// Route to delete a mood entry by ID
router.delete('/mood-entries/:id', moodEntryController.deleteMoodEntryById);

module.exports = router;
