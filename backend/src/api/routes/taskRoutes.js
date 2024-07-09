const express = require("express");
const auth = require("../middlewares/auth");
const adminAuth = require("../middlewares/adminAuth");

const {
  getTasks,
  getATask,
} = require("../controllers/taskControllers/getTasks");
const { updateTask } = require("../controllers/taskControllers/updatetask");
const { deleteTask } = require("../controllers/taskControllers/deletetask");
const { createTask } = require("../controllers/taskControllers/taskCreate");
const {
  getOrAssignTask,
} = require("../controllers/taskControllers/selectedTask");
const { checkTheTerm } = require("../controllers/taskControllers/checkTheTerm");
const {
  taskCompletenessUpdate,
} = require("../controllers/taskControllers/completenessUpdate");

const router = express.Router();

//Task operations routes
router.post("/create", auth, adminAuth, createTask);
router.get("/get-all", auth, adminAuth, getTasks);
router.get("/get-one/:id", auth, getATask);
router.put("/update/:id", auth, adminAuth, updateTask);
router.delete("/delete/:id", auth, adminAuth, deleteTask);

router.get("/suggested-task", auth, getOrAssignTask);
router.get("/check-term", auth, checkTheTerm);
router.get("/update-completeness/:taskId", auth, taskCompletenessUpdate);

module.exports = router;
