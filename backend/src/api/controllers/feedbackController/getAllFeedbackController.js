const feedbackService = require('../../services/feedbackServices/feedbackService');

// Controller function to get all feedback
const getAllFeedback = async (req, res) => {
    try {
        const allFeedback = await feedbackService.getAllFeedback();
        res.status(200).json({ 
            success: true, 
            feedback: allFeedback });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    
    getAllFeedback,

};