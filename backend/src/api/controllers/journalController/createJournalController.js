const journalService = require("../../services/journalServices/journalServices");
const journalModel = require("../../models/journalModel/createJournal");

const asyncHandler = require("express-async-handler");

// addNewJournal contoller
const storeJournal = asyncHandler(async (req, res) => {
  try {
    const { emoji, tittle, journalEntry, time, date } = req.body;

    const userId = req.user.user_id;

    const newJournal = await journalService.storeJournal(
      userId,
      emoji,
      tittle,
      journalEntry,
      time,
      date
    );

    // console.log('New journal:' ,newJournal);

    res.status(201).json({
      message: "journal added successfully",
      // journal: newJournal
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = {
  storeJournal,
};
