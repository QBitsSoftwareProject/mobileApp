const mongoose = require("mongoose");

const FeedBackScheema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "RegularUser",
  },

  satisfication: {
    type: String,
    required: true,
  },
  finterface: {
    type: Boolean,
    required: true,
  },
  privacy: {
    type: Boolean,
    required: true,
  },
  speed: {
    type: Boolean,
    required: true,
  },
  consumption: {
    type: Boolean,
    required: true,
  },
  design: {
    type: Boolean,
    required: true,
  },
  comment: {
    type: String,
  },

  // date: {
  //   type: Date,
  //   required: true,
  // },

  // time: {
  //   type: String,
  //   required: true,
  // },
},
{
  timestamps:true
});

module.exports = mongoose.model("FeedBack", FeedBackScheema);
