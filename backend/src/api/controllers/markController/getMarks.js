const mark = require("../../models/stressMark/mark.model");

//controller to get all marks
exports.getAllMarks = async (req, res) => {
    try {
        const allMarks = await mark.find();
        if (!allMarks) {
            return res.status(404).json({ msg: "marks not found" });
        }
        return res.status(201).json(allMarks);
    } catch (err) {
        return res.status(500).json({ errorMsg: "failed to fetch marks", error: err });
    }
};