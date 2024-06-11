const qModel = require("../../models//questions/questions");
const userModel = require("../../models/regularUser/regularUser");

exports.updateQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    // Destructuring question data from request body
    const { questionText, questionType, options, day } = req.body;

    // Creating a new Question using the Question model and the provided data
    const updateQuestion = {
      questionText,
      questionType,
      options,
      day,
    };

    await qModel.findByIdAndUpdate(id, updateQuestion);

    // Sending success response with status code 201 and a success message
    return res.status(201).json({ message: "Question update successfully" });
  } catch (err) {
    // Sending internal server error response with status code 500 and error details
    res.status(500).json({ error: "update failed", details: err.message });
  }
};

exports.updateAnswer = async (req, res) => {
  try {
    // Destructuring question data from request body
    const { qId, answer } = req.body;

    const userId = req.user.user_id;

    const user = await userModel.findById(userId);

    user.response.find((que) => que.questionId == qId).answer = answer;

    await user.save();

    // Sending success response with status code 201 and a success message
    return res.status(201).json({ message: "answer updated successfully" });
  } catch (err) {
    // Sending internal server error response with status code 500 and error details
    console.log(err);
    res.status(500).json({ error: "Update failed", details: err.message });
  }
};
