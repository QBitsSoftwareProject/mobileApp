const regularUser = require("../../models/regularUser/regularUser");
const goals = require("../../models/goals/goals");
const {
  getWeightedMoodAvg,
} = require("../../services/moodsCalServices/getWeightedMoodAvg");
const {
  findSuggestedGoals,
} = require("../../services/goalServices/findSuggestedGoals");
const { getStressData } = require("../../services/stressMarks/getDecayValue");

exports.getSuggestedGoals = async (req, res) => {
  try {
    // Finding the user by ID
    const getUser = await regularUser.findById(req.user.user_id);

    // If user is not found, return a 404 error response
    if (!getUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Extract goal IDs from the user's selectedGoals array
    const goalIds = getUser.selectedGoals.map((goal) => goal.goalId);

    //get average mood weight
    const averageMoodWeight = await getWeightedMoodAvg(req.user.user_id);

    //get the stressLevel score and decay value
    const stressLevelData = await getStressData(req.user.user_id);

    let suggestedGoalList = await findSuggestedGoals(
      stressLevelData.decayValue,
      stressLevelData.score,
      averageMoodWeight
    );

    // console.log(suggestedGoalList);

    // Find goals in the goals collection that do not match the extracted goal IDs
    const unselectedGoals = await goals
      .find({
        _id: { $nin: goalIds },
        category: { $in: suggestedGoalList },
      })
      .sort({ currentRating: -1 });

    const goalsByCategory = unselectedGoals.reduce((acc, goal) => {
      if (!acc[goal.category]) {
        acc[goal.category] = [];
      }

      acc[goal.category].push(goal);
      return acc;
    }, {});

    const topRatingGoals = Object.values(goalsByCategory).flatMap((goals) => {
      return goals.slice(0, 2);
    });

    // Sending success response with status code 200 and the selected goals
    return res.status(200).json(topRatingGoals);
  } catch (err) {
    res.status(500).json({ error: "fetch failed", error: err.message });
  }
};
