const mongoose = require("mongoose");

// Extracting the Schema class from mongoose
const schema = mongoose.Schema;

// Defining the schema for regular users
const reportSchema = new schema({
    ReportingUser: {
        type: schema.Types.ObjectId,
        ref: "RegularUser",
        required: true
    },
    ReportedUser: {
        type: schema.Types.ObjectId,
        ref: "RegularUser",
        required: true
    },
    ReportedPost: {
        type: schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
    ReportStatement: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Exporting the mongoose model for regular users based on the defined schema
module.exports = mongoose.model("Report", reportSchema);
