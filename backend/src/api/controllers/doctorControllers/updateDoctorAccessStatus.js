const doctorModel = require("../../models/doctor/doctor");

exports.updateDoctorAccessStatus = async (req, res) => {
    try {
        const access = req.body;
        const doctorId = req.params;

        // Finding and updating the user by ID
        await doctorModel.findByIdAndUpdate(doctorId.id, access);

        // Sending success response with status code 201 and a message
        return res.status(201).json({ message: "Doctor access level updated successfully" });
    } catch (err) {
        res.status(500).json({ error: "Error in updating doctor access level", details: err });
    }
};
