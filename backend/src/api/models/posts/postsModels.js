const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "RegularUser",
    required: true,
  },
  postCategory: {
    type: String,
    required: true,
    enum: [
      "Stories",
      "Self Care",
      "Mindfulness",
      "Creative",
      "Supportive",
      "Stress",
    ],
    default: "",
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  comments: [
    {
      text: String,
      created: {
        type: Date,
        default: Date.now,
      },
      postedBy: {
        type: Schema.Types.ObjectId,
        ref: "RegularUser",
      },
    },
  ],
});

module.exports = mongoose.model("Post", postSchema); // Use capitalized model name for convention
