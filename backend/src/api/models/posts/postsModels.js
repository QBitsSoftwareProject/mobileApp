const mongoose = require("mongoose");

const schema = mongoose.Schema;

const appointmentSchema = new schema({
  postId: {
    type: schema.Types.ObjectId,
    required: true,
  },

  userId: {
    type: schema.Types.ObjectId,
    ref: "RegularUser",
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  time: {
    type: Object,
    required: true,
  },
  status: {
    type: String,
    enum: ["Public", "Private"],
    default: "Public",
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("userAppointments", appointmentSchema);
