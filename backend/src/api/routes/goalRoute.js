const express = require("express");

const auth = require("../middlewares/auth");
const adminAuth = require("../middlewares/adminAuth");

const {
  createGoal,
} = require("../controllers/goalsControllers/createController");
const {
  updateGoal,
  updateGoalRating,
} = require("../controllers/goalsControllers/updateController");
const {
  deleteGoal,
} = require("../controllers/goalsControllers/deleteController");
const {
  getGoals,
  getAGoal,
} = require("../controllers/goalsControllers/getController");

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
const {
  userRatingUpdate,
} = require("../controllers/goalsControllers/userGoalRatingUpdate");

const router = express.Router();

router.post("/create", auth, adminAuth, createGoal);
router.put("/update/:id", auth, adminAuth, updateGoal);
router.put("/update-rate/:id", auth, updateGoalRating);
router.delete("/delete/:id", auth, adminAuth, deleteGoal);
router.get("/get-all", auth, getGoals);
router.get("/get-goal/:id", auth, getAGoal);

router.post("/add-goal", auth, addSelectedGoal);
router.get("/selected-goals", auth, getSelectedGoals);
router.put("/update-completeness", auth, objectiveStateUpdate);
router.put("/delete-selected-goal", auth, deleteSelectedGoal);
router.get("/suggested-goals", auth, getSuggestedGoals);
router.get("/completed-goals", auth, getCompletedGoals);
router.post("/goal-rating", auth, userRatingUpdate);

module.exports = router;
