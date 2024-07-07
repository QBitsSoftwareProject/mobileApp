const journalService = require("../../services/journalServices/journalServices");
const journalModel = require("../../models/journalModel/createJournal");

const asyncHandler = require("express-async-handler");

// delete journal
const deleteJournal = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const deleteJournal = await journalModel.findByIdAndDelete(id);
    if (!deleteJournal) {
      return res.status(404).json({ message: "Journal entry not found" });
    }
    res.status(200).json({ message: "journal delleted sucessfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = {
  deleteJournal,
};
