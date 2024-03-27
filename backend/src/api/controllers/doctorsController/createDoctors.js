const doctorSchema = require("../../models/doctors/doctorsModels");

exports.createDoctors = async (req,res) => {
    try {

       const { name } = req.body;

       const newDoctor = new doctorSchema({name});

       await newDoctor.save();

       return res.status(201).json({message:"New Docter created"});

    } catch (error) {
        
        return res.status(500).json({err:error});
    }
}