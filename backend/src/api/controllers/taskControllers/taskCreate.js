const taskModel = require("../../models/tasksModel/taskModel");

exports.createTask = async (req, res) => {
  try {
    // Destructuring user data from request body
    const { headText, subText, iconUrl, steps, duration, day } = req.body;

    // Creating a new task using the task model and the provided data
    const newUser = await taskModel.create({
      headText,
      subText,
      iconUrl,
      steps,
      duration,
      day,
    });

    // Sending success response with status code 201 and a success message
    return res.status(201).json({ message: "Task created successfully" });
  } catch (err) {
    // Sending internal server error response with status code 500 and error details
    res
      .status(500)
      .json({ error: "Task creation failed", details: err.message });
  }
};
