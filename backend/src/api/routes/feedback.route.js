const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");

const {
  storeFeedback,
} = require("../controllers/feedbackController/addFeedbackController");

const {
  getAllFeedback,
} = require("../controllers/feedbackController/getAllFeedbackController");

const {
  deleteFeedback,
} = require("../controllers/feedbackController/deletefeedbackContoller");

router.post("/add-feedback", auth, storeFeedback);

router.get("/getAll-feedback", auth, getAllFeedback);

router.delete("/delete-feedback/:id", auth, deleteFeedback);

module.exports = router;
