const mongoose = require("mongoose");

// Extracting the Schema class from mongoose
const schema = mongoose.Schema;

// Defining the schema for tasks
const motivationSchema = new schema({
  description: {
    type: String,
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
module.exports = mongoose.model("Motivations", motivationSchema);
