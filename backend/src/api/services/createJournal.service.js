const createJournal = require("../models/createJournal")

// addnew Journal service
const storeJournal = (userid, emoji, tittle, journalEntry, imgUrl, time, date) => {
    try{
        if(!userid || !emoji || !tittle || !journalEntry || !time || !date) {
            throw new Error('not completed')
    }

    const newJournal = createJournal.create({
        userid:userid,
        emoji:emoji,
        tittle:tittle,
        journalEntry:journalEntry,
        imgUrl:imgUrl,
        time:time,
        date:date
    });

    return newJournal;

}catch (error){
    console.error(error);
    throw new Error('internal server error')
}
};

// filter journals by userId
const getJournalByUserId =  (userId) => {
    try {
        const journal =  createJournal.find({userId: userId});
        return journal || null;
    } catch (error) {
        console.error(error);
        throw new Error('Internal Server Error');
    }
};


// delete journal
const deleteJournal = async (id) =>{
    try{
        const deleteJournalById = await createJournal.findById(id);
        if(!deleteJournalById){
            throw new Error("Journal entry not found");
        }
        return deleteJournalById;
    }catch(error){
        throw new Error(error.message)
    }
}

module.exports = {
    storeJournal,
    getJournalByUserId,
    deleteJournal
};
