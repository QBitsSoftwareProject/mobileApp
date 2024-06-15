const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");

const {
  storeJournal,
} = require("../controllers/journalController/createJournalController");

const {
  updateJournal,
} = require("../controllers/journalController/updatejournalController");

const {
  getJournalByUserId,
} = require("../controllers/journalController/getJournalbyUserid");

const {
  getJournalByObjectId,
} = require("../controllers/journalController/getjournalbyObjectid");

const {
  deleteJournal,
} = require("../controllers/journalController/deleteJournalController");

const {
  getJournalByDate,
} = require("../controllers/journalController/getJournalbyDateController");

router.post("/add-journal", auth, storeJournal);
router.post("/update-journal/:id", auth, updateJournal);
router.get("/getJournal-byid", auth, getJournalByUserId);
router.get("/getJournal-bydate/:date", auth, getJournalByDate);
router.get("/getJournal-byObjectId/:id", auth, getJournalByObjectId);
router.delete("/delete-journal/:id", auth, deleteJournal);

module.exports = router;
