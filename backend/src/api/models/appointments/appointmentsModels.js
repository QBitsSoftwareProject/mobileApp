const mongoose = require("mongoose");

const schema = mongoose.Schema;

const appointmentSchema = new schema({
  doctorId: {
    type: schema.Types.ObjectId,
    ref: "Doctor",
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

  accept: {
    type: Boolean,
    default: false,
  },

  reject: {
    type: Boolean,
    default: false,
  },

  cancel: {
    type: Boolean,
    default: false,
  },

  complete: {
    type: Boolean,
    default: false,
  },

  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("userAppointments", appointmentSchema);
