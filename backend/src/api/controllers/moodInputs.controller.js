const MoodEntry = require('../models/moodInput.models');
const MoodEntryService = require('../services/moodInput.services')

const asyncHandler = require('express-async-handler');

// Controller to create a new mood entry
const storeMoodEntry = asyncHandler(async (req, res) => {
    try {
        const { userid, selectedEmoji, moodText, time, date, count } = req.body;

        console.log("recived userid: ",userid)
        console.log("recived selectedEmoji: ",selectedEmoji)
        console.log("recived moodText: ",moodText)
        console.log("recived time: ",time)
        console.log("recived date: ",date)
        console.log("receive all")
        
        const newMoodEntry = await MoodEntryService.createMoodEntry( userid, selectedEmoji, moodText, time, date, count );
        
        console.log('New MoodEntry:' ,newMoodEntry);
        
        res.status(201).json({
            message: "Mood added successfully",
            moodEntry: newMoodEntry
        });

    } catch (error) {
        console.error('Error creating mood entry:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});




// update journal by id
const updateMoodEntry = asyncHandler(async(req,res) => {
    
    const id = req.params.id

    const checkInstance = await MoodEntry.findById(id);

    if(checkInstance){

        const response = await MoodEntry.findByIdAndUpdate(id, {...req.body})

        if(response){
            res.status(200).json(response);
        }
        else{
            res.status(403).json('mood cannot be update');
        }
    }
    else{
        res.status(404).json('mood does not exists');
    }
});

//get journal by user id
const getMoodEntryByUserId = asyncHandler(async (req, res) => {
    try {
        const userid = req.params.userId;

        // Find the question by ID and populate the options
        const existingMoodEntry = await MoodEntryService.getMoodEntryByUserId(userid);

        if (existingMoodEntry) {
            res.status(200).json(existingMoodEntry);
            console.log(existingMoodEntry);
        } else {
            res.status(404).json({ error: 'Mood Entry not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports ={
    storeMoodEntry,
    
    updateMoodEntry,

    getMoodEntryByUserId
};