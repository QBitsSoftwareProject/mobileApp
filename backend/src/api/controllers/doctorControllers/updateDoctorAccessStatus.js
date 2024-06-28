const doctorModel = require("../../models/doctor/doctor");

exports.updateDoctorAccessStatus = async (req, res) => {
    try {
        const access = req.body;
        const doctorId = req.params;

        console.log(doctorId.id, access.access);

        // Finding and updating the user by ID
        await doctorModel.findByIdAndUpdate(doctorId.id, access);

        // Sending success response with status code 201 and a message
        return res.status(201).json({ message: "User access level updated successfully" });
    } catch (err) {
        res.status(500).json({ error: "Error in updating doctor access leve", details: err });
    }
};
