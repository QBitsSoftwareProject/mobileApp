const taskService = require("../../services/taskServices/taskService");

exports.getOrAssignTask = async (req, res) => {
  try {
    const userId = req.user.user_id;
    const tasks = await taskService.getOrAssignTask(userId);
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Error fetching tasks", details: error.message });
  }
};
