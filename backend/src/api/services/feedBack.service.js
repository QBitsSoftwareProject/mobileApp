
const feedBack = require('../models/feedbackModel')

const storeFeedback = (satisfication, finterface, privacy, speed, consumption, design, comment) => {

    console.log(satisfication)
    console.log(finterface)
    console.log(privacy)
    console.log(speed)
    console.log(consumption)
    console.log(design)
    console.log(comment)


    try{
        if(!satisfication || !finterface || !privacy || !speed || !consumption || !design) {
            throw new Error('not completed!!!')
    }

    const newFeedBack = feedBack.create({
        
        satisfication:satisfication,
        finterface:finterface,
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

//get all feedbacks
const getAllFeedback =  async() => {
    try {
        const allFeedback = await feedBack.find({});
        return allFeedback;

    } catch (error) {
        console.error(error);
        throw new Error('Internal Server Error');
    }
};

//delete feedback
const deleteFeedback = async (id) =>{
    try{
        if(!id){
            throw new Error("Feedback not found");
        }
        const deleteFeedback = await feedBack.findByIdAndDelete(id);
        
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
