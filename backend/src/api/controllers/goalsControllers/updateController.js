const goalModel = require("../../models/goals/goals");

exports.updateGoal = async (req, res) => {
  try {
    // Destructuring the request body to extract user details
    const {
      title,
      subTitle,
      description,
      objectives,
      completness,

      objectivesState,
      duration,
      category,
      currentRating,
      ratingCount,
    } = req.body;

    // Extracting the user ID from request parameters
    const { id } = req.params;

    //Goal rating Update
    let newRatingCount = 1;
    let newRatingValue = 0;

    if (ratingCount == 1) {
      const goal = await goalModel.findById(id);

      //get and set rating count
      const currentRatingCount = goal.ratingCount;
      newRatingCount += currentRatingCount;

      //Calculate total rating
      newRatingValue =
        (goal.currentRating * currentRatingCount + currentRating) /
        (currentRatingCount + 1);
    }

    // Creating an object with updated user details
    const updateGoal = {
      title,
      subTitle,
      description,
      objectives,
      completness,

      objectivesState,
      duration,
      category,
      currentRating: newRatingValue.toFixed(2),
      ratingCount: newRatingCount,
    };

    // Finding and updating the user by ID
    await goalModel.findByIdAndUpdate(id, updateGoal);

    // Sending success response with status code 201 and a message
    return res.status(201).json({ message: "Goal updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Goal update failed", details: err.message });
  }
};
