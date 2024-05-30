const regularUser = require("../../models/regularUser/regularUser");
const goals = require("../../models/goals/goals");

exports.getSuggestedGoals = async (req, res) => {
  try {
    // Finding the user by ID
    const getUser = await regularUser.findById(req.user.user_id);

    // If user is not found, return a 404 error response
    if (!getUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Extract goal IDs from the user's selectedGoals array
    const goalIds = getUser.selectedGoals.map((goal) => goal.goalId);

    // Find goals in the goals collection that do not match the extracted goal IDs
    const unselectedGoals = await goals.find({ _id: { $nin: goalIds } });

    // Sending success response with status code 200 and the selected goals
    return res.status(200).json(unselectedGoals);
  } catch (err) {
    res.status(500).json({ error: "fetch failed", error: err.message });
  }
};
