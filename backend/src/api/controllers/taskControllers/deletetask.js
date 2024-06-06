const taskModel = require("../../models/tasksModel/taskModel");

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    // Finding and deleting the task by id
    const deletedTask = await taskModel.findByIdAndDelete(id);

    // If task is not found, return a 404 error response
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Sending success response with status code 201 and a success message
    return res.status(201).json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Task delete failed", error: err.message });
  }
};
