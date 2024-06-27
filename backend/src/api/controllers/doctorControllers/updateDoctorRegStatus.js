const doctorModel = require("../../models/doctor/doctor");

exports.updateDoctorRegStatus = async (req, res) => {
    try {
        const regStatus = req.body;
        const doctorId = req.params;

        console.log(doctorId.id, regStatus);

        // Finding and updating the user by ID
        await doctorModel.findByIdAndUpdate(doctorId.id, regStatus);

        // Sending success response with status code 201 and a message
        return res.status(201).json({ message: "User registration status updated successfully" });
    } catch (err) {
        res.status(500).json({ error: "Error in updating doctor registration status", details: err });
    }
};
