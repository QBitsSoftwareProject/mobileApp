const regularUser = require("../../models/regularUser/regularUser");
const goalsModel = require("../../models/goals/goals");

exports.getCompletedGoals = async (req, res) => {
  try {
    // Finding the user by ID
    const getUser = await regularUser.findById(req.user.user_id);

    // If user is not found, return a 404 error response
    if (!getUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Extract completed goals from the user's selectedGoals array
    const goalIds = getUser.selectedGoals
      .filter((goal) => goal.isComplete === true)
      .map((goal) => goal.goalId);

    // Find goals in the goals collection that match the extracted goal IDs
    const completedGoals = await goalsModel.find({ _id: { $in: goalIds } });

    // Update due date and completeness to send completed goals details
    let completedGoalsDetails = [];

    for (const element of completedGoals) {
      const goalToUpdate = getUser.selectedGoals.find(
        (item) => item.goalId == element._id
      );

      element.dueDate = goalToUpdate.dueDate;
      element.completeness = goalToUpdate.completeness;

      completedGoalsDetails.push(element);
    }

    // Sort completed goals by dueDate in descending order
    completedGoalsDetails.sort(
      (a, b) => new Date(b.dueDate) - new Date(a.dueDate)
    );

    // Sending success response with status code 200 and the selected goals
    return res.status(200).json(completedGoalsDetails);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "fetch failed", error: err.message });
  }
};
