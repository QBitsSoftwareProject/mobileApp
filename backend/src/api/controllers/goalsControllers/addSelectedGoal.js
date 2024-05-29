const regularUser = require("../../models/regularUser/regularUser");

// Function to add an item to the selectedGoals array
exports.addSelectedGoal = async (req, res) => {
  try {
    // Extract user ID from the request
    const userId = req.user.user_id;

    // Extract the goal to be added from the request body
    const { selectedGoals } = req.body;

    // Ensure the goal is provided
    if (!selectedGoals) {
      return res.status(400).json({ error: "Goal is required" });
    }

    // Find the user by ID and add the new goal to the selectedGoals array
    await regularUser.findByIdAndUpdate(
      userId,
      { $push: { selectedGoals: selectedGoals } },
      { new: true }
    );

    // Sending success response with status code 200 and a message
    return res.status(200).json({ message: "Goal added successfully" });
  } catch (err) {
    // Handling errors
    res.status(500).json({ error: "Failed to add goal", details: err.message });
  }
};
