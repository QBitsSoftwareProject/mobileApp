const mongoose = require('mongoose');

const CurrentMoodSchema = mongoose.Schema({

  userid: {
    type: mongoose.Schema.Types.ObjectId,
    required:true
  },
  happy: {
    type: Number,
    required: true
  }, 

  sad: {
    type: Number,
    required:true
  },

  neutral: {
    type:Number,
    required:true
  },

  worried: {
    type:Number,
    required:true
  }


});

module.exports = mongoose.model('CurrentMood', CurrentMoodSchema);