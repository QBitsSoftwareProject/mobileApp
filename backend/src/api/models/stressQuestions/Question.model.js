const mongoose = require('mongoose');
const Option = require("../../models/stressOptions/Options.model");
const OptionsModel = require('../stressOptions/Options.model');

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({

    question : {
        type : String,
        required: true
    },

    imgurl : {
        type : String,
        required : true
    },


    options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Options'
    }]
          
    
    
});

module.exports = mongoose.model("Question", QuestionSchema);
// module.exports = mongoose.model("options", OptionsModel);



