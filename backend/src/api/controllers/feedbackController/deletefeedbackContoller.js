const feedbackService = require('../../services/feedbackServices/feedbackService');

// Controller function to delete feedback by ID
const deleteFeedback = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedFeedback = await feedbackService.deleteFeedback(id);
        res.status(200).json({ 
            success: true, 
            message: 'Feedback deleted successfully', 
            feedback: deletedFeedback });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
   
    deleteFeedback
};