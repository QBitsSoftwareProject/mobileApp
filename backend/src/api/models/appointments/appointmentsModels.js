const mongoose = require("mongoose");

const schema = mongoose.Schema;

const appointmentSchema = new schema(
  {
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
    // selectedTimeSlot: {
    //   type: Object,
    //   required: true,
    // },
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Completed", "Rejected", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("userAppointments", appointmentSchema);
