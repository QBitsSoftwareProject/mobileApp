const appointmentSchema = require("../../models/appointments/appointmentsModels");
const doctorSchema = require("../../models/doctors/doctorsModels");

exports.getAppointments = async (req, res) => {
    try {
        const { doctorId } = req.body;

        // const doctor = await doctorSchema.findById(doctorId);
       
        const relevantAppointments = await appointmentSchema.find({doctorId:doctorId});
        
        if(!relevantAppointments){
            return res.status(404).json({message:"Appointments not found!"})
        }

        return res.status(201).json(relevantAppointments);

    } catch (err) {
        console.error(err)
       res.status(500).json({error:"Failed to fetch!", error:err });
    }
}