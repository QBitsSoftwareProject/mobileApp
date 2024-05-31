const mongoose = require("mongoose");

const schema = mongoose.Schema;

const appointmentSchema = new schema({
  doctorId: {
    type: schema.Types.ObjectId,
    ref: "doctorSchema",
    required: true,
  },

  userId: {
    type: schema.Types.ObjectId,
    ref: "userSchema",
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  time: {
    type: String,
    required: true,
  },

  accept: {
    type: Boolean,
  },

  reject: {
    type: Boolean,
  },

  cancel: {
    type: Boolean,
  },

  complete: {
    type: Boolean,
  },
});

module.exports = mongoose.model("userAppointments", appointmentSchema);
