const goalModel = require("../../models/goals/goals");

// Controller function to get all regular users
exports.getGoals = async (req, res) => {
  try {
    // Finding all regular users
    const getGoals = await goalModel.find();

    // If no users are found, return a 404 error response
    if (!getGoals) {
      return res.status(404).json({ message: "Goals not found" });
    }

    // Sending success response with status code 200 and the list of users
    return res.status(201).json(getGoals);
  } catch (err) {
    // Handling internal server errors
    res.status(500).json({ error: "Error fetching user", error: err.message });
  }
};

// Controller function to get a single regular Goal by ID
exports.getAGoal = async (req, res) => {
  try {
    const { id } = req.params;

    // Finding the Goal by ID
    const getGoal = await goalModel.findById(id);

    // If Goal is not found, return a 404 error response
    if (!getGoal) {
      return res.status(404).json({ message: "Goal not found" });
    }

    // Sending success response with status code 200 and the Goal object
    return res.status(201).json(getGoal);
  } catch (err) {
    res.status(500).json({ error: "Goal fetch failed", err: err.message });
  }
};
