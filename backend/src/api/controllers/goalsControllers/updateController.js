const goalModel = require("../../models/goals/goals");

exports.updateGoal = async (req, res) => {
  try {
    // Destructuring the request body to extract user details
    const {
      tittle,
      subTitle,
      description,
      objectives,
      completness,
      length,
      objectivesState,
      duration,
      category,
      currentRating,
      ratingCount,
    } = req.body;

    // Extracting the user ID from request parameters
    const { id } = req.params;

    // Creating an object with updated user details
    const updateGoal = {
      tittle,
      subTitle,
      description,
      objectives,
      completness,
      length,
      objectivesState,
      duration,
      category,
      currentRating,
      ratingCount,
    };

    // Finding and updating the user by ID
    await goalModel.findByIdAndUpdate(id, updateGoal);

    // Sending success response with status code 201 and a message
    return res.status(201).json({ message: "Goal updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Goal update failed", details: err.message });
  }
};
