const express = require("express");

const auth = require("../middlewares/auth");
const {
  createQuestion,
} = require("../controllers/questionsController/createQuestions");
const {
  getQuestion,
  getAQuestion,
  userQuestion,
} = require("../controllers/questionsController/getQuestion");
const {
  updateQuestion,
  updateAnswer,
} = require("../controllers/questionsController/updateQuestion");
const {
  deleteQuestion,
} = require("../controllers/questionsController/deleteQuestion");

const router = express.Router();

//Motivation operations routes
router.post("/create", createQuestion);
router.get("/get-all", getQuestion);
router.get("/get-one/:id", getAQuestion);
router.put("/update/:id", updateQuestion);
router.delete("/delete/:id", deleteQuestion);

router.get("/get-daily-questions", auth, userQuestion);
router.post("/update-answer", auth, updateAnswer);

module.exports = router;
