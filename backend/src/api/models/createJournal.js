
const mongoose = require('mongoose');

const Journalschema = mongoose.Schema({
    userid:{
        type: String,
        required:true
    },

    emoji:{
        type:Number,
        required:true
    },
    tittle:{
        type:String,
        
    },
    journalEntry:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String
    },

    time:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }

    

})

module.exports = mongoose.model('journal',Journalschema)