const mongoose = require("mongoose");

// Extracting the Schema class from mongoose
const schema = mongoose.Schema;

// Defining the schema for regular users
const doctorSchema = new schema({
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

  licenseSide1: {
    type: String,
    // required:true
  },

  licenseSide2: {
    type: String,
    // required:true
  },

  specialization: {
    type: String,
    required: true,
  },

  qualification: {
    type: String,
    required: true,
  },

  availableDays: {
    type: Array,
    // required:true
  },

  monday: {
    type: Array,
    // required:true
  },

  tuesday: {
    type: Array,
    // required:true
  },

  wednessday: {
    type: Array,
    // required:true
  },

  thursday: {
    type: Array,
    // required:true
  },

  friday: {
    type: Array,
    // required:true
  },

  saturday: {
    type: Array,
    // required:true
  },

  sunday: {
    type: Array,
    // required:true
  },

  proPic: {
    type: String,
    // required:true
  },

  regStatus: {
    type: Boolean,
    default: false
  },

  access: {
    type: Boolean,
    default: true
  },

  bio: {
    type: String,
    required: true,
  },
});

// Exporting the mongoose model for regular users based on the defined schema
module.exports = mongoose.model("Doctor", doctorSchema);
