const taskModel = require("../../models/tasksModel/taskModel");

exports.updateTask = async (req, res) => {
  try {
    // Destructuring the request body to extract user details
    const { headText, subText, iconUrl, steps, duration, day } = req.body;

    // Extracting the Task ID from request parameters
    const { id } = req.params;

    // Creating an object with updated Task details
    const updateTask = { headText, subText, iconUrl, steps, duration, day };

    // Finding and updating the Task by ID
    await taskModel.findByIdAndUpdate(id, updateTask);

    // Sending success response with status code 201 and a message
    return res.status(201).json({ message: "Task updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Task update failed", details: err });
  }
};
