const mongoose = require('mongoose');

const FeedBackScheema = mongoose.Schema({

    satisfication:{
        type:Number,
        required:true
    },
    interface:{
        type:Boolean,
        required:true
    },
    privacy:{
        type:Boolean,
        required:true
    },
    speed:{
        type:Boolean,
        required:true
    },
    consumption:{
        type:Boolean,
        required:true
    },
    design:{
        type:Boolean,
        required:true
    },
    comment:{
        type:String
    }

})

module.exports = mongoose.model('FeedBack',FeedBackScheema)