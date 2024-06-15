const feedbackService = require("../../services/feedbackServices/feedbackService");

// Controller function to store feedback
const storeFeedback = async (req, res) => {
  const {
    satisfication,
    finterface,
    privacy,
    speed,
    consumption,
    design,
    comment,
    date,
    time,
  } = req.body;
  const userId = req.user.user_id;
  try {
    const newFeedback = await feedbackService.storeFeedback(
      userId,
      satisfication,
      finterface,
      privacy,
      speed,
      consumption,
      design,
      comment,
      date,
      time
    );
    res.status(201).json({
      success: true,
      message: "Feedback stored successfully",
      feedback: newFeedback,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  storeFeedback,
};
