const author = require("../../models/authorModel/author");

// get all video files
exports.getAllAuthors = async (req, res) => {
    try {
        const allAuthors = await author.find();
        if (!allAuthors) {
            return res.status(404).json({ msg: "author not found" });
        }
        return res.status(201).json(allAuthors);
    } catch (err) {
        return res.status(500).json({ errorMsg: "failed to fetch authors", error: err });
    }
};

// get author info
exports.getAuthorInfo = async (req, res) => {
    try {
        const { authorId } = req.params;
        const selectedAuthor = await author.findById(authorId);
        if (!selectedAuthor) {
            return res.status(404).json({ msg: "author not found" });
        }
        return res.status(201).json(selectedAuthor);
    } catch (err) {
        return res.status(500).json({ errorMsg: "failed to fetch author info", error: err.message });
    }
};