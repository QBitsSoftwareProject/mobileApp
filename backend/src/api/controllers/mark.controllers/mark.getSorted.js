const markService = require("../../services/stressMarks/mark.service");
const asyncHandler = require('express-async-handler');

//controller to get mark by user id

const getSortedMarkById = asyncHandler(async (req, res) => {
    try {
        const u_id = req.user.user_id;

        const mark = await markService.getMarkById(u_id);

        const sortmark = await markService.getMarkData(mark);

        if (sortmark) {
            res.status(200).json(sortmark);
        } else {
            res.status(404).json({ error: 'Mark not found' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = {
    getSortedMarkById
};