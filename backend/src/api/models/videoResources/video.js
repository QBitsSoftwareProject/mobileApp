const mongoose = require("mongoose");

const schema = mongoose.Schema;

const videoSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    // required: true,
  },
  tags: {
    type: [{
      type: String,
      enum: [
        "meditation and mindfulness",
        "physical exercise and yoga",
        "nature and relaxation",
        "positive affirmations and inspirational content",
        "music and sound therapy"
      ]
    }],
    required: true
  },
  ifWatch: {
    type: Boolean,
  },
  watchCount: {
    type: Number,
    // required: true,
  },
  downloadURL: {
    type: String,
    // required: true,
  },
  thumbnailURL: {
    type: String,
    // required: true,
  },
  rating: {
    type: Number,
    default: 10
  }
}, { timestamps: true });

module.exports = mongoose.model("videoResources", videoSchema);
