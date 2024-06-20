const mongoose = require("mongoose");

const schema = mongoose.Schema;

const goalSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  objectives: {
    type: Array,
    required: true,
  },

  completeness: {
    type: Number,
    default: 0,
  },

  objectivesState: {
    type: Array,
    required: true,
  },

  duration: {
    type: String, // E.g., '2 weeks', '3 days'
    required: true,
  },

  category: {
    type: String,
    enum: [
      "meditation",
      "physicalActivity",
      "socialConnection",
      "creativeExpression",
      "personalGrowth",
      "relaxation",
      "inspirationalContent",
    ],
    require: true,
  },

  isComplete: {
    type: Boolean,
    default: false,
  },

  dueDate: {
    type: String,
  },

  currentRating: {
    type: Number,
    default: 10.0,
  },

  ratingCount: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Goals", goalSchema);
