const taskModel = require("../../models/tasksModel/taskModel");

// Controller function to get all tasks
exports.getTasks = async (req, res) => {
  try {
    // Finding all tasks
    const task = await taskModel.find();

    // If no users are found, return a 404 error response
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Sending success response with status code 200 and the list of tasks
    return res.status(201).json(task);
  } catch (err) {
    // Handling internal server errors
    res.status(500).json({ error: "Error fetching task", error: err.message });
  }
};

// get one task by Id ------------------------------------------------------------------------------------------------------------------
// Controller function to get a single task by ID
exports.getATask = async (req, res) => {
  try {
    const { id } = req.params;

    // Finding the task by ID
    const task = await taskModel.findById(id);

    // If user is not found, return a 404 error response
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Sending success response with status code 200 and the user object
    return res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: "Task fetch failed", error: err.message });
  }
};
