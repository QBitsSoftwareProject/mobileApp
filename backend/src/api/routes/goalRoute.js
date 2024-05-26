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
const {
  getGoals,
  getAGoal,
} = require("../controllers/goalsControllers/getController");

const router = express.Router();

router.post("/", createGoal);
router.put("/:id", updateGoal);
router.delete("/:id", deleteGoal);
router.get("/", getGoals);
router.get("/:id", getAGoal);

module.exports = router;
