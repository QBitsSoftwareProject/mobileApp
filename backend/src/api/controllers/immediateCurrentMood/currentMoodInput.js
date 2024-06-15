const currentMoodService = require("../../services/immediateCurrentMoodInput/currentMoodService");
const CurrentMoodModel = require('../../models/immediateCurrentMoodInput/currentMood.mode')

const asyncHandler = require('express-async-handler');

//controller to get mark by id

const getMoodById = asyncHandler(async (req, res) => {
    try {
        const u_id = req.user.user_id;

        const mark = await currentMoodService.getMarkMoodById(u_id);

        if (mark) {
            res.status(200).json(mark);
        } else {
            res.status(404).json({ error: 'Mark not found' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
});

const storeMood = asyncHandler(async (req, res) => {
    try {
        const { happy, sad, neutral,worried } = req.body;

        const userid = req.user.user_id;

        const newMood = await currentMoodService.storeCurrentMood(userid, happy, sad, neutral,worried);

    

        res.status(201).json({
            message: "Mood added successfully",
            mood: newMood
        });
    } catch (error) {
        console.error(error.message);
        res.status(400).json({ error: error.message }); // or 500 based on your preference
    }
});


const updateCurrentMood = asyncHandler(async (req, res) => {
    const userid = req.user.user_id;

    const checkInstance = await CurrentMoodModel.findOne({ userid: userid });

    if (checkInstance) {
        const response = await CurrentMoodModel.findByIdAndUpdate(
            checkInstance._id, 
            { ...req.body },
            { new: true } 
        );

        if (response) {
            res.status(200).json(response);
        } else {
            res.status(403).json('Mood cannot be updated');
        }
    } else {
        res.status(404).json('Mood does not exist');
    }
});






module.exports = {
    getMoodById,
    storeMood,
    updateCurrentMood
};