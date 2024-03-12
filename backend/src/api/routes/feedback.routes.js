const express = require("express");
const router = express.Router();

const {

    storeFeedback,
    getAllFeedback,
    deleteFeedback
     
} = require('../controllers/feedback.controller')

router.post('/add-feedback',storeFeedback);

router.get('/getAll-feedback',getAllFeedback);

router.delete('/delete-feedback/:id',deleteFeedback)


module.exports = router;