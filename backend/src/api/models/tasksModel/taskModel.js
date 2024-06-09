const mongoose = require("mongoose");

// Extracting the Schema class from mongoose
const schema = mongoose.Schema;

// Defining the schema for tasks
const taskSchema = new schema({
  headText: {
    type: String,
    required: true,
  },
  subText: {
    type: String,
    required: true,
  },
  iconUrl: {
    type: String,
    required: true,
  },
  steps: {
    type: Array,
    required: true,
  },
  duration: {
    type: String,
    enum: ["short-term", "medium-term", "long-term"],
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
});

// Exporting the mongoose model for tasks based on the defined schema
module.exports = mongoose.model("Tasks", taskSchema);