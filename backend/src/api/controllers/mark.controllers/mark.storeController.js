const markService = require("../../services/stressMarks/mark.service");
const asyncHandler = require('express-async-handler');

// controller to store mark

const storeMark = asyncHandler(async (req, res) => {
    try {
        const { mark, date, time } = req.body;

        const userid = req.user.user_id;

        const newMark = await markService.storeMark(userid, mark, date, time);

        res.status(201).json({
            message: "Mark added successfully",
            mark: newMark
        });
    } catch (error) {
        console.error(error.message);
        res.status(400).json({ error: error.message }); // or 500 based on your preference
    }
});


module.exports = {
    storeMark,
};