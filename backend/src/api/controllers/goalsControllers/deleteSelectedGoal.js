const regularUser = require("../../models/regularUser/regularUser");

exports.deleteSelectedGoal = async (req, res) => {
  try {
    // Destructuring the request body to extract user details
    const { goalId } = req.body;

    // Finding the user by ID
    const getUser = await regularUser.findById(req.user.user_id);

    // If user is not found, return a 404 error response
    if (!getUser) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log(goalId);

    // Find the relevant goal index based on goalId
    const goalIndex = getUser.selectedGoals.findIndex(
      (goal) => goal.goalId == goalId
    );

    // If goal is not found, return an error response
    if (goalIndex === -1) {
      return res.status(404).json({ message: "Goal not found" });
    }
    // Remove the goal from the selectedGoals array
    getUser.selectedGoals.splice(goalIndex, 1);

    // Save the updated user
    await regularUser.findByIdAndUpdate(req.user.user_id, getUser);

    // Sending success response with status code 201 and a message
    return res.status(201).json({ message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "User update failed", details: err.message });
  }
};
