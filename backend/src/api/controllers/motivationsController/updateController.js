const motivationModel = require("../../models/motivations/motivation");

exports.updateMotivation = async (req, res) => {
  try {
    // Destructuring the request body to extract motivation details
    const { description, duration, day } = req.body;

    // Extracting the Motivation ID from request parameters
    const { id } = req.params;

    // Creating an object with updated Motivation details
    const updateMotivation = { description, duration, day };

    // Finding and updating the Motivation by ID
    await motivationModel.findByIdAndUpdate(id, updateMotivation);

    // Sending success response with status code 201 and a message
    return res.status(201).json({ message: "Motivation updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Motivation update failed", details: err });
  }
};
