const reportSchema = require("../../models/");

exports.getPost = async (req, res) => {
  try {
    const { postId } = req.params;

    const report = await reportSchema
      .find({ postId: postId })
      .populate("userId");

    if (!report) {
      return res.status(404).json({ message: "Report not found!" });
    }
    return res.status(201).json(report);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch!", error: err });
  }
};
