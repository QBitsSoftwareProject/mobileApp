const express = require("express");
const router = express.Router();

const{
    createQuestionWithOptions,
    getAllQuestions,
    getAllOptions,
    getOptionDetailsById,
    getQuestionById,
    getAllQuestionIds,
    findQuestionById,
    updateQuestionWithOptionsById,
    deleteQuestionById
    
} = require("../../api/controllers/stressQuestionsController/question.controller");

router.post("/create-question", createQuestionWithOptions);
router.get("/get-all-questions",getAllQuestions);
router.get("/get-all-options",getAllOptions);
router.get("/get-option/:id", getOptionDetailsById);
router.get("/get-question/:id", getQuestionById);
router.get("/get-all-question-ids", getAllQuestionIds);
router.get("/get-question-by-id/:id", findQuestionById);
router.post("/update-question-by-id/:id", updateQuestionWithOptionsById);
router.delete("/delete-question-by-id/:id", deleteQuestionById);

// router.get("/get-option/:id", getOptionById);

module.exports = router;