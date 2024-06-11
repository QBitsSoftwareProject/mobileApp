const qModel = require("../../models//questions/questions");

exports.createQuestion = async (req, res) => {
  try {
    // Destructuring question data from request body
    const { questionText, questionType, options, day, number } = req.body;

    // Creating a new Question using the Question model and the provided data
    const newQuestion = await qModel.create({
      questionText,
      questionType,
      options,
      day,
      number,
    });

    // Sending success response with status code 201 and a success message
    return res.status(201).json({ message: "Question created successfully" });
  } catch (err) {
    // Sending internal server error response with status code 500 and error details
    res
      .status(500)
      .json({ error: "Question creation failed", details: err.message });
  }
};
