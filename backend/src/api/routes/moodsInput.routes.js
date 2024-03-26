const express = require('express');
const router = express.Router();
const createMoodEntryController = require('../controllers/moodInputController/create.controller');
const getAllMoodEntryController = require('../controllers/moodInputController/getAll.controller');
const getSingleMoodEntryController = require('../controllers/moodInputController/getSingle.controller')


// Route to create a new mood entry
router.post('/mood-create', createMoodEntryController.createMoodEntry);

// Route to get all mood entries
router.get('/mood-entries', getAllMoodEntryController.getAllMoodEntries);

// Route to get a single mood entry by ID
router.get('/mood-entries/:id', getSingleMoodEntryController.getMoodEntryById);


module.exports = router;
