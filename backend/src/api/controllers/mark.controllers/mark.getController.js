const markService = require("../../services/stressMarks/mark.service");
const asyncHandler = require('express-async-handler');

//controller to get mark by id

const getMarkById = asyncHandler(async (req, res) => {
    try {
        const u_id = req.user.user_id;

        const mark = await markService.getMarkById(u_id);

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

module.exports = {
    getMarkById
};