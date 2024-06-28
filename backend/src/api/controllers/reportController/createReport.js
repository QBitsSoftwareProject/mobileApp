const reportSchema = require("../../models/reportModel/report");
const postsModel = require("../../models/posts/postsModels");

exports.createReport = async (req, res) => {
  try {
    const { reportedPostId, reportStatement } = req.body;
    const reportingUserId = req.user.user_id;

    //find repoted user's userId
    const post = await postsModel.findById(reportedPostId);
    const reportedUserId = post.userId;

    console.log(reportedUserId);

    const newReport = new reportSchema({
      ReportingUser: reportingUserId,
      ReportedUser: reportedUserId,
      ReportedPost: reportedPostId,
      ReportStatement: reportStatement,
    });

    await newReport.save();

    return res.status(201).json("New report succesfully created!");
  } catch (error) {
    console.error(error);
    return res.status(500).json("New report created unsuccsess!");
  }
};
