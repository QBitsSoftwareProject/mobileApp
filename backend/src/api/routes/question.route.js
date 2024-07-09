const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const adminAuth = require("../middlewares/adminAuth");

const {
  createQuestionWithOptions,
  getAllQuestions,
  getAllOptions,
  getOptionDetailsById,
  getQuestionById,
  getAllQuestionIds,
  findQuestionById,
  updateQuestionWithOptionsById,
  deleteQuestionById,
} = require("../../api/controllers/stressQuestionsController/question.controller");

router.post("/create-question", auth, adminAuth, createQuestionWithOptions);
router.get("/get-all-questions", auth, getAllQuestions);
router.get("/get-all-options", auth, getAllOptions);
router.get("/get-option/:id", auth, getOptionDetailsById);
router.get("/get-question/:id", auth, getQuestionById);
router.get("/get-all-question-ids", auth, getAllQuestionIds);
router.get("/get-question-by-id/:id", auth, findQuestionById);
router.post(
  "/update-question-by-id/:id",
  auth,
  adminAuth,
  updateQuestionWithOptionsById
);
router.delete(
  "/delete-question-by-id/:id",
  auth,
  adminAuth,
  deleteQuestionById
);

// router.get("/get-option/:id", getOptionById);

module.exports = router;
