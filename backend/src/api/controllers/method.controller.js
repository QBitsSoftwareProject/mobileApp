
const methodService = require("../services/method.service");
const asyncHandler = require('express-async-handler');
const methodModel = require('../models/method.model')

const storeMethod = asyncHandler(async (req, res) => {
    try {
        const { methodType, mark, resouceName, discription,imageURL,resourceURL } = req.body;

        // console.log('Received Mark:', mark);
        // console.log('Received date', date);
        // console.log('Received Time', time);
        // console.log('Received id', userid);

        const newMethod = await methodService.storeMethod(methodType, mark, resouceName, discription,imageURL,resourceURL);

        console.log('New Method:', newMethod);

        res.status(201).json({
            message: "Mark added successfully",
            method: newMethod
        });
    } catch (error) {
        console.error(error.message);
        res.status(400).json({ error: error.message }); // or 500 based on your preference
    }
});

const getAllMethods = asyncHandler (async (req,res) => {
    
    const response2 = await methodModel.find({});

   if(response2) {
       res.status(201).json(response2);
   } else {
       res.status(200).json("no methods found");
   }
 });

 const updateMethod = asyncHandler(async(req,res) => {
    
    const id = req.params.id

    const checkInstance = await methodModel.findById(id);

    if(checkInstance){

        const response = await methodModel.findByIdAndUpdate(id, {...req.body})

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

})

module.exports = {
    storeMethod,
    getAllMethods,
    updateMethod
    
};

