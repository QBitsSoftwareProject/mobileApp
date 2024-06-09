const mongoose = require("mongoose");

const schema = mongoose.Schema;

const postSchema = new schema({
  userId: {
    type: schema.Types.ObjectId,
    ref: "RegularUser",
    required: true,
  },
  postCategory: {
    type: String,
    required: true,
    enum: [
      "Stories",
      "Self Care",
      "Mindfullness",
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
});

module.exports = mongoose.model("post", postSchema);
