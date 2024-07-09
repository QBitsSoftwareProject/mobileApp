const mongoose = require("mongoose");

const MethodSchema = mongoose.Schema({
  methodType: {
    type: String,
    enum: ["video", "audio", "pdf"],
    required: true,
  },
  category: {
    type: String,
    require: true,
    enum: [
      "meditation",
      "soundTherapy",
      "relaxation",
      "physicalActivity",
      "inspirationalContent",
      "cognitiveTraining",
    ],
  },

  resouceName: {
    type: String,
    required: true,
  },

  discription: {
    type: String,
    required: true,
  },

  imageURL: {
    type: String,
    required: true,
  },

  resourceURL: {
    type: String,
    required: true,
  },
  currentRating: {
    type: Number,
    default: 10.0,
  },
  ratedUsers: {
    type: Number,
    default: 1.0,
  },
});

module.exports = mongoose.model("Methods", MethodSchema);
