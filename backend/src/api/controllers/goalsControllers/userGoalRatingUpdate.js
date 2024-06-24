const userModel = require("../../models/regularUser/regularUser");
const goalModel = require("../../models/goals/goals");

exports.userRatingUpdate = async (req, res) => {
  try {
    const userId = req.user.user_id;
    const { goalId } = req.body;

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).send({ message: "user not found" });
    }

    user.selectedGoals.map((item, index) => {
      if (item.goalId == goalId) {
        user.selectedGoals[index].isRated = true;
      }
    });

    await userModel.findByIdAndUpdate(userId, user);

    res.status(201).json({ message: "goal is rated" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
