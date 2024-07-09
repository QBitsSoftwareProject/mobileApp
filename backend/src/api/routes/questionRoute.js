const express = require("express");

const auth = require("../middlewares/auth");
const adminAuth = require("../middlewares/adminAuth");

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
router.post("/create", auth, adminAuth, createQuestion);
router.get("/get-all", auth, adminAuth, getQuestion);
router.get("/get-one/:id", auth, adminAuth, getAQuestion);
router.put("/update/:id", auth, adminAuth, updateQuestion);
router.delete("/delete/:id", auth, adminAuth, deleteQuestion);

router.get("/get-daily-questions", auth, userQuestion);
router.post("/update-answer", auth, updateAnswer);

module.exports = router;
