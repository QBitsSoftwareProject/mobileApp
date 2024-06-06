const express = require("express");
const {
  getTasks,
  getATask,
} = require("../controllers/taskControllers/getTasks");
const { updateTask } = require("../controllers/taskControllers/updatetask");
const { deleteTask } = require("../controllers/taskControllers/deletetask");
const { createTask } = require("../controllers/taskControllers/taskCreate");

const router = express.Router();

//Task operations routes
router.post("/create", createTask);
router.get("/get-all", getTasks);
router.get("/get-one/:id", getATask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;
