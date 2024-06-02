const mongoose = require('mongoose');

const FeedBackScheema = mongoose.Schema({

    userid:{
        type:String,
        required:true,
    },
    
    satisfication:{
        type:String,
        required:true,
        
    },
    finterface:{
        type:String,
        required:true
    },
    privacy:{
        type:String,
        required:true
    },
    speed:{
        type:String,
        required:true
    },
    consumption:{
        type:String,
        required:true
    },
    design:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        
    },

    date:{
        type:String,
        required:true
    },

    time:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('FeedBack',FeedBackScheema)