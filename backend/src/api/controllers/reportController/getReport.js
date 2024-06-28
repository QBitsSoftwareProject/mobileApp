const reportSchema = require("../../models/reportModel/report");

exports.getReport = async (req, res) => {
  try {
    const report = await reportSchema.find();

    if (!report) {
      return res.status(404).json({ message: "Report not found!" });
    }
    return res.status(201).json(report);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch!", error: err });
  }
};
