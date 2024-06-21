const mongoose = require("mongoose");

// Extracting the Schema class from mongoose
const schema = mongoose.Schema;

// Defining the schema for questions
const questionSchema = new schema({
  questionText: {
    type: String,
    required: true,
  },
  questionType: {
    type: String,
    enum: ["mcq", "input"],
    required: true,
  },
  options: {
    type: [String],
    required: function () {
      return this.questionType === "mcq";
    },
  },
  day: {
    type: Number,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    enum: ["short-term", "medium-term", "long-term"],
    required: true,
  },
});

// Exporting the mongoose model for questions based on the defined schema
module.exports = mongoose.model("TaskQuestions", questionSchema);
