const regularUser = require("../../models/regularUser/regularUser");
const goalsModel = require("../../models/goals/goals");

exports.getCompletedGoals = async (req, res) => {
  try {
    // Finding the user by ID and populating the goal details
    const user = await regularUser
      .findById(req.user.user_id)
      .populate("selectedGoals.goalId");

    // If user is not found, return a 404 error response
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Filter the selectedGoals to include only those where isComplete is true
    const completedGoals = user.selectedGoals.filter((goal) => goal.isComplete);

    // Sort completed goals by dueDate in descending order
    completedGoals.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));

    return res.status(200).json(completedGoals);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "fetch failed", error: err.message });
  }
};
