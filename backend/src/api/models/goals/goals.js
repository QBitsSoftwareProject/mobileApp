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
  completness: {
    type: Number,
    default: 0,
  },
  length: {
    type: Number,
    required: true,
  },
  objectivesState: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Goals", goalSchema);
