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

const auth = require("../middlewares/auth");
const {
  addSelectedGoal,
} = require("../controllers/goalsControllers/addSelectedGoal");
const {
  getSelectedGoals,
} = require("../controllers/goalsControllers/getSelectedGoals");
const {
  objectiveStateUpdate,
} = require("../controllers/goalsControllers/objectiveStatesUpdate");
const {
  deleteSelectedGoal,
} = require("../controllers/goalsControllers/deleteSelectedGoal");
const {
  getSuggestedGoals,
} = require("../controllers/goalsControllers/getSuggestedGoals");
const {
  getCompletedGoals,
} = require("../controllers/goalsControllers/getCompletedGoals");

const router = express.Router();

router.post("/", createGoal);
router.put("/update/:id", updateGoal);
router.delete("/:id", deleteGoal);
router.get("/", getGoals);
router.get("/get-goal/:id", getAGoal);

router.post("/add-goal", auth, addSelectedGoal);
router.get("/selected-goals", auth, getSelectedGoals);
router.put("/update-completeness", auth, objectiveStateUpdate);
router.put("/delete-selected-goal", auth, deleteSelectedGoal);
router.get("/suggested-goals", auth, getSuggestedGoals);
router.get("/completed-goals", auth, getCompletedGoals);
module.exports = router;
