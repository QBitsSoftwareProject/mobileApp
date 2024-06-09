const motivationModel = require("../../models/motivations/motivation");

exports.createMotivation = async (req, res) => {
  try {
    // Destructuring user data from request body
    const { description, duration, day } = req.body;

    // Creating a new Motivation using the Motivation model and the provided data
    const newMotivation = await motivationModel.create({
      description,
      duration,
      day,
    });

    // Sending success response with status code 201 and a success message
    return res.status(201).json({ message: "Motivation created successfully" });
  } catch (err) {
    // Sending internal server error response with status code 500 and error details
    res
      .status(500)
      .json({ error: "Motivation creation failed", details: err.message });
  }
};
