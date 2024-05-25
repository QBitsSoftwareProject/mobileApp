const express = require("express");
const {
  createGoal,
} = require("../controllers/goalsControllers/createController");
const {
  updateGoal,
} = require("../controllers/goalsControllers/updateController");
const {
  deleteGoal,
} = require("../controllers/goalsControllers/deleteController");

const router = express.Router();

router.post("/", createGoal);
router.put("/:id", updateGoal);
router.delete("/:id", deleteGoal);

module.exports = router;
