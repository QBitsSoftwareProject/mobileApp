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

  feature: {
    type: String,
    enum: ["resource", "journal", "community", "none"],
  },
  taskNumber: {
    type: String,
    require: true,
  },
});

// Exporting the mongoose model for tasks based on the defined schema
module.exports = mongoose.model("Tasks", taskSchema);
