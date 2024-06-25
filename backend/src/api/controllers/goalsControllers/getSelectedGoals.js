const regularUser = require("../../models/regularUser/regularUser");
const goals = require("../../models/goals/goals");

exports.getSelectedGoals = async (req, res) => {
  try {
    // Finding the user by ID
    const getUser = await regularUser
      .findById(req.user.user_id)
      .populate("selectedGoals.goalId");

    // If user is not found, return a 404 error response
    if (!getUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const inCompleteGoals = getUser.selectedGoals.filter((goal) => {
      return !goal.isComplete;
    });

    //check due date
    const selectedGoals = inCompleteGoals.filter((goal, index) => {
      if (checkDueDate(goal.dueDate)) {
        return goal;
      }

      getUser.selectedGoals[index].isComplete = true;
    });

    // Save the updated user
    await regularUser.findByIdAndUpdate(req.user.user_id, getUser);

    // Sending success response with status code 200 and the selected goals
    return res.status(200).json(selectedGoals);
  } catch (err) {
    res.status(500).json({ error: "fetch failed", error: err.message });
  }
};

const checkDueDate = (dueDate) => {
  const currentDate = new Date();
  const due = new Date(dueDate);

  if (currentDate < due) {
    return true;
  }

  return false;
};
