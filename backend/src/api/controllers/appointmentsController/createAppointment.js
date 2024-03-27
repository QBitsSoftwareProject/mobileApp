const appointmentSchema = require("../../models/appointments/appointmentsModels");
const doctorSchema = require("../../models/doctors/doctorsModels");

exports.createAppointment = async (req,res) => {
    try {
        // const { docId } = req.params;

        const { doctorId,userId,date, time} = req.body;

        const doctor = await doctorSchema.findById(doctorId);
       

        const newAppointment = new appointmentSchema({
            doctorId:doctor._id, 
            userId, 
            date, 
            time
        })

        await newAppointment.save();

        return res.status(201).json("New appointment succesfully created!");
        
    } catch (error) {
        console.error(error);
        return res.status(500).json("New appointment created unsuccsess!")
    }
}

