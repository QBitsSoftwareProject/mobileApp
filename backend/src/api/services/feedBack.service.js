const { default: Feedback } = require('../../../../frontend/src/screens/FeedbackScreen/Feedback');
const feedBack = require('../models/feedbackModel')

const storeFeedback = (userid, emoji, tittle, journalEntry, imgUrl, time, date) => {
    try{
        if(!satisfication || !interface || !privacy || !speed || !consumption || !design || !comment) {
            throw new Error('not completed')
    }

    const newFeedBack = feedBack.create({
        
        satisfication:satisfication,
        interface:interface,
        privacy:privacy,
        speed:speed,
        consumption:consumption,
        design:design,
        comment:comment

    });

    return newFeedBack;

}catch (error){
    console.error(error);
    throw new Error('internal server error')
}
};

const getAllFeedback =  async() => {
    try {
        const allFeedback = await Feedback.find;
        return allFeedback;

    } catch (error) {
        console.error(error);
        throw new Error('Internal Server Error');
    }
};

const deleteFeedback = async (id) =>{
    try{
        const deleteFeedback = await Feedback.findByIdAndDelete(id);
        if(!deleteFeedback){
            throw new Error("Feedback not found");
        }
        return deleteFeedback;

    }catch(error){
        throw new Error(error.message)
    }
}

module.exports = {
    storeFeedback,
    getAllFeedback,
    deleteFeedback
};
