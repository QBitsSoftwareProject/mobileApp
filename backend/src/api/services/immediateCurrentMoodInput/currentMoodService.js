const CurrentMoodModel = require("../../models/immediateCurrentMoodInput/currentMood.mode");

// service for store mark
const storeCurrentMood =  (userid, happy, sad, worried, neutral) => {
    try {
        if (!userid || isNaN(happy) || isNaN(sad) || isNaN(worried) || isNaN(neutral)) {
            throw new Error('not complete');
        }

        const newCurrentMood =  CurrentMoodModel.create({
            userid: userid,
            happy: happy,
            sad: sad,
            worried: worried,
            neutral:neutral
        });

        return newCurrentMood;
    } catch (error) {
        console.error(error);
        throw new Error('Internal server error');
    }
};

// service for get mark by id

const getMarkMoodById =  (userid) => {
    try {
        const CurrentMood =  CurrentMoodModel.find({userid: userid});
        return CurrentMood || null;
    } catch (error) {
        console.error(error);
        throw new Error('Internal Server Error');
    }
};


module.exports = {
    storeCurrentMood,
    getMarkMoodById,
    
};
