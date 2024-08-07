const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "RegularUser",
      required: true,
    },
    postCategory: {
      type: String,

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

    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
