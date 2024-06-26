const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  recipientId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "recipientModel",
  },

  recipientModel: {
    type: String,
    required: true,
    enum: ["RegularUser", "Doctor"],
  },

  message: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true,
    enum: ["appointment", "comment"],
  },

  referenceId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "referenceModel",
  },

  referenceModel: {
    type: String,
    required: true,
    enum: ["userAppointments", "Comments"],
  },

  status: {
    type: String,
    enum: ["unread", "read"],
    default: "unread",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Notification", notificationSchema);
