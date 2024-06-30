const regularUser = require("../../models/regularUser/regularUser");

// Controller function to get all regular users
exports.getRegularUsers = async (req, res) => {
  try {
    // Finding all regular users
    const getUser = await regularUser.find();

    // If no users are found, return a 404 error response
    if (!getUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Sending success response with status code 200 and the list of users
    return res.status(201).json(getUser);
  } catch (err) {
    // Handling internal server errors
    res.status(500).json({ error: "Error fetching user", error: err.message });
  }
};

// get one user by Id ------------------------------------------------------------------------------------------------------------------
// Controller function to get a single regular user by ID
exports.getARegularUser = async (req, res) => {
  try {
    // Finding the user by ID
    const getUser = await regularUser.findById(req.user.user_id);

    // If user is not found, return a 404 error response
    if (!getUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Sending success response with status code 200 and the user object
    return res.status(201).json(getUser);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Controller function to get a single regular user by ID
exports.getARegularUserById = async (req, res) => {
  try {

    let { userId } = req.params;

    // Finding the user by ID
    const getUser = await regularUser.findById(userId);

    // If user is not found, return a 404 error response
    if (!getUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Sending success response with status code 200 and the user object
    return res.status(201).json(getUser);
  } catch (err) {
    res.status(500).send(err);
  }
  
};

exports.getRegularUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    // Finding the user by ID
    const getUser = await regularUser.findById(userId);

    // If user is not found, return a 404 error response
    if (!getUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Sending success response with status code 200 and the user object
    return res.status(201).json(getUser);
  } catch (err) {
    res.status(500).json({ error: "User fetch failed", error: err.message });
  }
};
