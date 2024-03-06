const express = require("express");
const router = express.Router();

const{
    storeJournal,
    updateJournal,
    getJournalByUserId,
    getJournalByObjectId,
    deleteJournal
} = require('../controllers/createJournal.contriller');

router.post('/add-journal',storeJournal);
router.post('/update-journal/:id',updateJournal);
router.get('/getJournal-byid/:userid',getJournalByUserId);
router.get('/getJournal-byObjectId/:id',getJournalByObjectId);
router.delete('/delete-journal/:id',deleteJournal)


module.exports = router;