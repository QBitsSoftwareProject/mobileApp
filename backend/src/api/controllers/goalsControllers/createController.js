const goalModel = require("../../models/goals/goals");

exports.createGoal = async (req, res) => {
  try {
    const {
      title,
      subTitle,
      description,
      objectives,
      completness,
      length,
      objectivesState,
      duration,
      category,
    } = req.body;

    const newGoal = await goalModel.create({
      title,
      subTitle,
      description,
      objectives,
      completness,
      length,
      objectivesState,
      duration,
      category,
    });

    return res.status(201).json({ message: "Goal created successfull" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Goal creation failed", details: error.message });
  }
};
