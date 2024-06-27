const mongoose = require("mongoose");

const schema = mongoose.Schema;

const imageSchema = new schema({
  about: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const paragraphSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  image: {
    type: imageSchema,
    required: false,
  },
});

const articleSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  paragraphs: {
    type: [paragraphSchema],
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  rating: {
    type: Number,
    default: 10
  }
}, { timestamps: true });

module.exports = mongoose.model("Article", articleSchema);
