const journalService = require("../../services/journalServices/journalServices");
const journalModel = require("../../models/journalModel/createJournal");

const asyncHandler = require("express-async-handler");

//by date
const getJournalByDate = asyncHandler(async (req, res) => {
  try {
    const userId = req.user.user_id;
    // // let userId = '214102J'
    const date = req.params.date;

    const journal = await journalService.getJournalByDate(userId, date);

    if (journal) {
      res.status(200).json(journal);
    } else {
      res.status(404).json({ error: "journal not found" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = {
  getJournalByDate,
};
