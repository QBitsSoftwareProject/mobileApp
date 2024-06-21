const journalService = require("../../services/journalServices/journalServices");
const journalModel = require("../../models/journalModel/createJournal");

const asyncHandler = require("express-async-handler");

//get journal by object id
const getJournalByObjectId = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;

    // Find the question by ID and populate the options
    const journal = await journalModel.findById(id);

    if (journal) {
      res.status(200).json(journal);
    } else {
      res.status(404).json({ error: "journal not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = {
  getJournalByObjectId,
};
