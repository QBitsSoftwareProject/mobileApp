const author = require("../../models/authorModel/author");

// register new author
exports.createAuthor = async (req, res) => {
    try {

        const { name, profileImgURL } = req.body;

        const newAuthor = new author({
            name,
            profileImg: profileImgURL
        });

        await newAuthor.save();

        return res.status(201).json("new author registered successfully");

    } catch (err) {

        return res.status(500).json({ errorMsg: "author registration failed", error: err });

    }
};