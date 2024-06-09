const motivationModel = require("../../models/motivations/motivation");

exports.deleteMotivation = async (req, res) => {
  try {
    const { id } = req.params;

    // Finding and deleting the Motivation by id
    const deletedMotivation = await motivationModel.findByIdAndDelete(id);

    // If Motivation is not found, return a 404 error response
    if (!deletedMotivation) {
      return res.status(404).json({ message: "Motivation not found" });
    }

    // Sending success response with status code 201 and a success message
    return res.status(201).json({ message: "Motivation deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Motivation delete failed", error: err.message });
  }
};
