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

    // Function to check due date
    const dateChecking = (selectedDate, duration) => {
      const currentDate = new Date();
      const durationParts = duration.split(" ");
      const durationValue = parseInt(durationParts[0], 10);
      const durationUnit = durationParts[1];

      const selectedDateObj = new Date(selectedDate);

      if (durationUnit === "weeks") {
        selectedDateObj.setDate(selectedDateObj.getDate() + durationValue * 7);
      } else if (durationUnit === "days") {
        selectedDateObj.setDate(selectedDateObj.getDate() + durationValue);
      } else {
        throw new Error("Unsupported duration unit");
      }

      dueDate = selectedDateObj.toISOString();

      return selectedDateObj >= currentDate;
    };

    // Initialize joinedGoals as an empty array
    let joinedGoals = [];

    // Updating objectiveStatus of each goal
    for (const item of selectedGoals) {
      const choosedGoal = getUser.selectedGoals.find(
        (goal) => goal.goalId == item._id
      );
      const goalToUpdate = getUser.selectedGoals.find(
        (goal) => goal.goalId == item._id
      );

      if (goalToUpdate.isComplete == true) {
        continue;
      }

      // console.log(item._id);

      item.completeness = choosedGoal.completeness;

      if (dateChecking(choosedGoal.selectedDate, item.duration)) {
        joinedGoals.push(item);
      } else {
        goalToUpdate.isComplete = true;
        goalToUpdate.dueDate = dueDate;

        //console.log(dueDate);
      }
    }

    // Save the updated user
    await regularUser.findByIdAndUpdate(req.user.user_id, getUser);

    // Sending success response with status code 200 and the selected goals
    return res.status(200).json(joinedGoals);
  } catch (err) {
    res.status(500).json({ error: "fetch failed", error: err.message });
  }
};
