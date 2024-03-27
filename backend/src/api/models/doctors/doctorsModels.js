const mongoose = require("mongoose");

const schema = mongoose.Schema;

const doctorSchema = new schema({
    name:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("doctorDetails",doctorSchema);