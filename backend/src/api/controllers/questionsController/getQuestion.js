const qModel = require("../../models/questions/questions");
const userModel = require("../../models/regularUser/regularUser");

// Controller function to get all Question
exports.getQuestion = async (req, res) => {
  try {
    // Finding all Question
    const question = await qModel.find();

    // If no question are found, return a 404 error response
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    // Sending success response with status code 200 and the list of Question
    return res.status(201).json(question);
  } catch (err) {
    // Handling internal server errors
    res
      .status(500)
      .json({ error: "Error fetching question", error: err.message });
  }
};

// get one question by Id ------------------------------------------------------------------------------------------------------------------
// Controller function to get a single question by ID
exports.getAQuestion = async (req, res) => {
  try {
    const { id } = req.params;

    // Finding the question by ID
    const question = await qModel.findById(id);

    // If user is not found, return a 404 error response
    if (!question) {
      return res.status(404).json({ message: "question not found" });
    }

    // Sending success response with status code 200 and the user object
    return res.status(201).json(question);
  } catch (err) {
    res
      .status(500)
      .json({ error: "question fetch failed", error: err.message });
  }
};

exports.userQuestion = async (req, res) => {
  try {
    const userId = req.user.user_id;

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not Found!" });
    }

    const answerDate = new Date(user.answeredDate);
    const currentDate = new Date();

    if (
      answerDate.getUTCDate() === currentDate.getUTCDate() &&
      answerDate.getUTCMonth === currentDate.getUTCMonth &&
      answerDate.getUTCFullYear() === currentDate.getUTCFullYear()
    ) {
      return res.json({ isAnswered: true });
    }

    //check current Task type
    let day;
    if (user.currentTaskType === "short-term") {
      day = user.currentShortTermDay;
    } else if (user.currentTaskType === "medium-term") {
      day = user.currentMediumTermDay;
    } else if (user.currentTaskType === "long-term") {
      day = user.currentLongTermDay;
    }

    const questions = await qModel.find({
      day: day,
      duration: user.currentTaskType,
    });

    if (questions) {
      questions.forEach((item) => {
        user.response.push({
          questionId: item._id,
          answer: "",
        });
      });

      user.answeredDate = currentDate;

      await user.save();
    }

    return res.status(200).json({ questions: questions, isAnswered: false });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "question fetch failed", error: error.message });
  }
};
