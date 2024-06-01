const regularUser = require("../../models/regularUser/regularUser");
const goals = require("../../models/goals/goals");

exports.getSelectedGoals = async (req, res) => {
  try {
    // Finding the user by ID
    const getUser = await regularUser.findById(req.user.user_id);

    // If user is not found, return a 404 error response
    if (!getUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Extract goal IDs from the user's selectedGoals array
    const goalIds = getUser.selectedGoals.map((goal) => goal.goalId);

    // Find goals in the goals collection that match the extracted goal IDs
    const selectedGoals = await goals.find({ _id: { $in: goalIds } });

    // Initialize joinedGoals as an empty array
    let joinedGoals = [];

    // Updating objectiveStatus of each goal
    selectedGoals.forEach(async (item, index) => {
      item.completeness = getUser.selectedGoals.find(
        (goal) => goal.goalId == item._id
      ).completeness;
      joinedGoals.push(item);
    });

    // Sending success response with status code 200 and the selected goals
    return res.status(200).json(joinedGoals);
  } catch (err) {
    res.status(500).json({ error: "fetch failed", error: err.message });
  }
};
