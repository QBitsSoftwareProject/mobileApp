const mongoose = require("mongoose");

const MethodSchema = mongoose.Schema(
{
    methodType: {
        type: String,
        required: true
    },

    category:{
        type: String,
        required: true
    },

    resouceName: {
        type: String,
        required: true
    },

    discription: {
        type: String,
        required: true
    },

    imageURL: {
        type: String,
        required: true
    },

    resourceURL: {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model("Methods", MethodSchema);