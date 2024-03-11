const feedbackService = require('../services/feedBack.service')

// Controller function to store feedback
const storeFeedback = async (req, res) => {
    const { satisfaction, interface, privacy, speed, consumption, design, comment } = req.body;

    try {
        const newFeedback = await feedbackService.storeFeedback(satisfaction, interface, privacy, speed, consumption, design, comment);
        res.status(201).json({ success: true, message: 'Feedback stored successfully', feedback: newFeedback });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Controller function to get all feedback
const getAllFeedback = async (req, res) => {
    try {
        const allFeedback = await feedbackService.getAllFeedback();
        res.status(200).json({ success: true, feedback: allFeedback });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Controller function to delete feedback by ID
const deleteFeedback = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedFeedback = await feedbackService.deleteFeedback(id);
        res.status(200).json({ success: true, message: 'Feedback deleted successfully', feedback: deletedFeedback });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    storeFeedback,
    getAllFeedback,
    deleteFeedback
};