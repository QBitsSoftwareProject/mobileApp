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

  mark: {
    type: Number,
    required: true,
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
});

module.exports = mongoose.model("Methods", MethodSchema);
