const markService = require("../../services/stressMarks/mark.service");
const asyncHandler = require("express-async-handler");

// controller to store stress level

const storeMark = asyncHandler(async (req, res) => {
  try {
    const { userid, mark, date, time } = req.body;

    const newMark = await markService.storeMark(userid, mark, date, time);

    res.status(201).json({
      message: "Mark added successfully",
      mark: newMark,
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message }); // or 500 based on your preference
  }
});

// controller to get mark by user
const getMarkById = asyncHandler(async (req, res) => {
  try {
    const u_id = req.params.userid;

    const mark = await markService.getMarkById(u_id);

    if (mark) {
      res.status(200).json(mark);
    } else {
      res.status(404).json({ error: "Mark not found" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = {
  storeMark,
  getMarkById,
};
