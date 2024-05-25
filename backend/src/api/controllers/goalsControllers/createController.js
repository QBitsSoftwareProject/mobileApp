const goalModel = require("../../models/goals/goals");

exports.createGoal = async (req, res) => {
  try {
    const {
      tittle,
      subTitle,
      description,
      objectives,
      completness,
      length,
      objectivesState,
    } = req.body;

    const newGoal = await goalModel.create({
      tittle,
      subTitle,
      description,
      objectives,
      completness,
      length,
      objectivesState,
    });

    return res.status(201).json({ message: "Goal created successfull" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Goal creation failed", details: error.message });
  }
};
