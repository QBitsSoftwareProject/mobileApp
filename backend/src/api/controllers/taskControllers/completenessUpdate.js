const userModel = require("../../models/regularUser/regularUser");

exports.taskCompletenessUpdate = async (req, res) => {
  try {
    const userId = req.user.user_id;
    const { taskId } = req.params;

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    user.tasks.map((item) => {
      if (item.taskId == taskId) {
        item.isComplete = true;
      }
    });

    await user.save();

    return res.status(201).json({ message: "successfully updated" });
  } catch (error) {}
};
