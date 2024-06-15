const mongoose = require("mongoose");

const Journalschema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "RegularUser",
  },

  emoji: {
    type: Number,
    required: true,
  },
  tittle: {
    type: String,
  },
  journalEntry: {
    type: String,
    required: true,
  },

  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("journal", Journalschema);
