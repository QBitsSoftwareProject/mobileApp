const journalService = require("../../services/journalServices/journalServices");
const journalModel = require("../../models/journalModel/createJournal");

const asyncHandler = require("express-async-handler");

// update journal by id
const updateJournal = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const checkInstance = await journalModel.findById(id);

  if (checkInstance) {
    const response = await journalModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (response) {
      res.status(200).json(response);
    } else {
      res.status(403).json("Method cannot be update");
    }
  } else {
    res.status(404).json("Method does not exists");
  }
});

module.exports = {
  updateJournal,
};
