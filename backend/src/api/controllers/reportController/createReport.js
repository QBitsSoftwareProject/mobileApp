const reportSchema = require("../../models/");

exports.createReport = async (req, res) => {
  try {
    const { reportedPostId, reportStatement } = req.body;
    const reportedUserId = req.user.user_id;
    const reportingUserId = req.user.user_id;

    const createdAt = new Date();

    const newReport = new reportSchema({
      reportedUserId,
      reportingUserId,
      reportedPostId,
      reportStatement,
      createdAt: createdAt,
    });

    await newReport.save();

    return res.status(201).json("New report succesfully created!");
  } catch (error) {
    console.error(error);
    return res.status(500).json("New report created unsuccsess!");
  }
};
