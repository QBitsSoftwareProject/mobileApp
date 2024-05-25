const goalModel = require("../../models/goals/goals");

exports.deleteGoal = async (req, res) => {
  try {
    const { id } = req.params;

    // Finding and deleting the user by id
    const deletedGoal = await goalModel.findByIdAndDelete(id);

    // If user is not found, return a 404 error response
    if (!deletedGoal) {
      return res.status(404).json({ message: "Goal not found" });
    }

    // Sending success response with status code 201 and a success message
    return res.status(201).json({ message: "Goal deleted successfull" });
  } catch (err) {
    res.status(500).json({ error: "Goal delete failed", error: err.message });
  }
};
