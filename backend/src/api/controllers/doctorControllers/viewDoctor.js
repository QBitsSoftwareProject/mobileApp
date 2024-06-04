const doctorModel = require("../../models/doctor/doctor");

exports.viewADoctor = async (req, res) => {
  try {
    const { doctorId } = req.body;
    // Finding the user by ID
    const getDoctor = await doctorModel.findById(doctorId);
    let doctorDetails = {
      _id: getDoctor._id,
      fullName: getDoctor.fullName,
      availableDays: getDoctor.availableDays,
      availableTimes: [
        getDoctor.monday,
        getDoctor.tuesday,
        getDoctor.wednessday,
        getDoctor.thursday,
        getDoctor.friday,
        getDoctor.saturday,
        getDoctor.sunday,
      ],

      proPic: getDoctor.proPic,
      bio: getDoctor.bio,
      qualification: getDoctor.qualification,
    };
    // console.log(getDoctor.monday);

    // If user is not found, return a 404 error response
    if (!getDoctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    // Sending success response with status code 200 and the user object
    return res.status(201).json(doctorDetails);
  } catch (err) {
    res.status(500).json({ error: "User fetch failed", err: err.message });
  }
};
