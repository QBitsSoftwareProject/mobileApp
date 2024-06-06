const mongoose = require("mongoose");

// Extracting the Schema class from mongoose
const schema = mongoose.Schema;

// Subdocument schema for user tasks
const userTaskSchema = new schema({
  taskId: {
    type: schema.Types.ObjectId,
    ref: "Tasks",
    required: true,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
  day: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    enum: ["short-term", "medium-term", "long-term"],
    required: true,
  },
});

// Defining the schema for regular users
const regularUserSchema = new schema({
  fullName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      },
      message: "Invalid email format",
    },
  },
  password: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        const phoneRegex = /^\+\d{11}$/;
        return phoneRegex.test(value);
      },
      message: "Invalid phone number format",
    },
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  proPic: {
    type: String,
    required: true,
  },

  selectedGoals: {
    type: Array,
  },

  tasks: [userTaskSchema],

  currentShortTermDay: {
    type: Number,
    default: 0,
  },

  currentMediumTermDay: {
    type: Number,
    default: 0,
  },

  currentLongTermDay: {
    type: Number,
    default: 0,
  },

  currentTaskType: {
    type: String,
    enum: ["short-term", "medium-term", "long-term"],
    default: "short-term",
  },
});

// Exporting the mongoose model for regular users based on the defined schema
module.exports = mongoose.model("RegularUser", regularUserSchema);
