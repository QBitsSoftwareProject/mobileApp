const journalService = require('../services/createJournal.service');
const journalModel = require('../models/createJournal');

const asyncHandler = require('express-async-handler');

const storeJournal = asyncHandler(async (req,res) =>{
    try{
        const {userid, emoji, tittle, journalEntry, imgUrl, time, date} = req.body;

        console.log("recived userid: ",userid)
        console.log("recived emoji: ",emoji)
        console.log("recived tittle: ",tittle)
        console.log("received journalEntry",journalEntry)
        console.log("recived imgUrl: ",imgUrl)
        console.log("recived time: ",time)
        console.log("recived date: ",date)

        const newJournal = await journalService.storeJournal(userid, emoji, tittle, journalEntry, imgUrl, time, date);

        console.log('New journal:' ,newJournal);

        res.status(201).json({
            message: "journal added successfully",
            journal: newJournal
        });

     

    }   catch(error){
        console.error(error.message);
        res.status(400).json({ error: error.message});
    }
});


const updateJournal = asyncHandler(async(req,res) => {
    
    const id = req.params.id

    const checkInstance = await journalModel.findById(id);

    if(checkInstance){

        const response = await journalModel.findByIdAndUpdate(id, {...req.body})

        if(response){
            res.status(200).json(response);
        }
        else{
            res.status(403).json('Method cannot be update');
        }
    }
    else{
        res.status(404).json('Method does not exists');
    }
});

const getJournalByUserId = asyncHandler(async (req, res) => {
    try {
        const userId = req.params.id;
        // let userId = '214102J'

        const journal = await journalService.getJournalByUserId(userId);

        if (journal) {
            res.status(200).json(journal);
        } else {
            res.status(404).json({ error: 'journal not found' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
});

const getJournalByObjectId = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;

        // Find the question by ID and populate the options
        const journal = await journalModel.findById(id);

        if (journal) {
            res.status(200).json(journal);
        } else {
            res.status(404).json({ error: 'journal not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const deleteJournal = asyncHandler(async (req, res) =>{
    try{
        const deleteJournal = await journalModel.findByIdAndDelete(req.params.id);
        if(!deleteJournal){
            return res.status(404).json({message: "Journal entry not found"});
        }
        res.status(200).json({message:"journal delleted sucessfully"});
    } catch (error){
        res.status(500).json({message: error.message});
    }
})
module.exports ={
    storeJournal,
    updateJournal,
    getJournalByUserId,
    getJournalByObjectId,
    deleteJournal
};