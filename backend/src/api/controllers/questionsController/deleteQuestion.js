const qModel = require("../../models/questions/questions");

exports.deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;

    // Finding and deleting the Question by id
    const deletedQuestion = await qModel.findByIdAndDelete(id);

    // If Question is not found, return a 404 error response
    if (!deletedQuestion) {
      return res.status(404).json({ message: "Question not found" });
    }

    // Sending success response with status code 201 and a success message
    return res.status(201).json({ message: "Question deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Question delete failed", error: err.message });
  }
};
