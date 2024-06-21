const mongoose = require("mongoose");

const schema = mongoose.Schema;

const authorSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    profileImg: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Author", authorSchema);