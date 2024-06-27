const goalModel = require("../../models/goals/goals");
const regularUser = require("../../models/regularUser/regularUser");

// Function to add an item to the selectedGoals array
exports.addSelectedGoal = async (req, res) => {
  try {
    // Extract user ID from the request
    const userId = req.user.user_id;

    // Extract the goal to be added from the request body
    const { goalId } = req.body;

    // Ensure the goal is provided
    if (!goalId) {
      return res.status(400).json({ error: "Goal is required" });
    }

    //set selected Date
    const selectedDate = new Date();

    //find due Date
    const goal = await goalModel.findById(goalId);
    const durationParts = goal.duration.split(" ");
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

    let dueDate = selectedDateObj;

    // Find the user by ID and add the new goal to the selectedGoals array
    await regularUser.findByIdAndUpdate(
      userId,
      {
        $push: {
          selectedGoals: {
            goalId,
            selectedDate,
            dueDate,
            objectivesState: goal.objectivesState,
          },
        },
      },
      { new: true }
    );

    // Sending success response with status code 200 and a message
    return res.status(200).json({ message: "Goal added successfully" });
  } catch (err) {
    // Handling errors
    res.status(500).json({ error: "Failed to add goal", details: err.message });
  }
};
