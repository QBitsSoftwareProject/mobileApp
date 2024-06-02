
const feedBack = require('../models/feedbackModel')

const storeFeedback = (userid,satisfication, finterface, privacy, speed, consumption, design, comment,date,time) => {



    try{
        if(!userid ||!satisfication || !finterface || !privacy || !speed || !consumption || !design || !date || !time){
            throw new Error('not completed!!!')
        }

        



            const newFeedBack =  feedBack.create({
                userid:userid,
                satisfication:satisfication,
                finterface:finterface,
                privacy:privacy,
                speed:speed,
                consumption:consumption,
                design:design,
                comment:comment,
                date:date,
                time:time
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
