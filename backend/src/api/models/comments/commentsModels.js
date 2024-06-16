const mongoose = require("mongoose");

const { Schema } = mongoose;
// const {ObjectId} mongoose.Schema

const commentsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "RegularUser",
      required: false,
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: "posts",
      required: true,
    },

    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comments", commentsSchema);
