const motivationModel = require("../../models/motivations/motivation");
const userModel = require("../../models/regularUser/regularUser");
const {
  getMotivationByDay,
} = require("../../services/taskServices/motivationService");

// Controller function to get all Motivations
exports.getMotivation = async (req, res) => {
  try {
    // Finding all Motivations
    const motivation = await motivationModel.find();

    // If no motivation are found, return a 404 error response
    if (!motivation) {
      return res.status(404).json({ message: "Motivation not found" });
    }

    // Sending success response with status code 200 and the list of Motivations
    return res.status(201).json(motivation);
  } catch (err) {
    // Handling internal server errors
    res
      .status(500)
      .json({ error: "Error fetching motivation", error: err.message });
  }
};

// get one motivation by Id ------------------------------------------------------------------------------------------------------------------
// Controller function to get a single motivation by ID
exports.getAMotivation = async (req, res) => {
  try {
    const { id } = req.params;

    // Finding the motivation by ID
    const motivation = await motivationModel.findById(id);

    // If user is not found, return a 404 error response
    if (!motivation) {
      return res.status(404).json({ message: "motivation not found" });
    }

    // Sending success response with status code 200 and the user object
    return res.status(201).json(motivation);
  } catch (err) {
    res
      .status(500)
      .json({ error: "motivation fetch failed", error: err.message });
  }
};

exports.getAMotivationByDay = async (req, res) => {
  try {
    const userId = req.user.user_id;
    const result = await getMotivationByDay(userId);

    if (result.error) {
      return res.status(result.status).json(result.message);
    }

    return res.status(200).json(result.data);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "Motivation fetch failed", message: err.message });
  }
};
