const journalService = require("../../services/journalServices/journalServices");
const journalModel = require("../../models/journalModel/createJournal");

const asyncHandler = require("express-async-handler");

// get all journals by Userid
const getJournalByUserId = async (req, res) => {
  try {
    const userId = req.user.user_id;

    const journal = await journalService.getJournalByUserId(userId);

    if (journal) {
      res.status(200).json(journal);
    } else {
      res.status(404).json({ error: "journal not found" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getJournalByUserId,
};
