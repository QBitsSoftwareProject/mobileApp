const doctorModel = require("../../models/doctor/doctor");
const appointmentModel = require("../../models/appointments/appointmentsModels");

exports.viewADoctor = async (req, res) => {
  try {
    const { doctorId } = req.body;
    // Finding the user by ID
    const getDoctor = await doctorModel.findById(doctorId);
    const getAppointment = await appointmentModel.find({ doctorId: doctorId });

    // getAppointment.map((item) => {
    //   const timeArray = setTimeSlot(item.date, getDoctor);
    //   // console.log("time:", timeArray, "app", item.time);

    //   timeArray.map((timeSlot,index) => {
    //     if (JSON.stringify(timeSlot) == JSON.stringify(item.time)) {
    //       // console.log(timeSlot);

    //     }
    //   });
    // });

    // Function to get available time slots excluding the booked ones
    const getAvailableTimes = (availableTimes, appointments) => {
      return availableTimes.map((dayTimes, index) => {
        const bookedTimes = appointments
          .filter((appointment) => {
            const appointmentDate = new Date(appointment.date);
            return appointmentDate.getDay() === index;
          })
          .map((appointment) => appointment.time);

        return dayTimes.filter(
          (timeSlot) =>
            !bookedTimes.some(
              (bookedTime) =>
                JSON.stringify(timeSlot) === JSON.stringify(bookedTime)
            )
        );
      });
    };

    let doctorDetails = {
      _id: getDoctor._id,
      fullName: getDoctor.fullName,
      availableDays: getDoctor.availableDays,
      availableTimes: getAvailableTimes(
        [
          getDoctor.sunday,
          getDoctor.monday,
          getDoctor.tuesday,
          getDoctor.wednessday,
          getDoctor.thursday,
          getDoctor.friday,
          getDoctor.saturday,
        ],
        getAppointment
      ),
      workplace: getDoctor.workplace,
      proPic: getDoctor.proPic,
      bio: getDoctor.bio,
      qualification: getDoctor.qualification,
      contactNumber: getDoctor.contactNumber,
    };
    // console.log(getDoctor.monday);

    // If user is not found, return a 404 error response
    if (!getDoctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    // Sending success response with status code 200 and the user object
    return res.status(201).json(doctorDetails);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "User fetch failed", err: err.message });
  }
};

// const setTimeSlot = (date, getDoctor) => {
//   const currentDate = new Date(date);

//   switch (currentDate.getDay()) {
//     case 6:
//       return getDoctor.saturday;
//     case 0:
//       return getDoctor.sunday;
//     case 1:
//       return getDoctor.monday;
//     case 2:
//       return getDoctor.tuesday;
//     case 3:
//       return getDoctor.wednessday;
//     case 4:
//       return getDoctor.thursday;
//     case 5:
//       return getDoctor.friday;

//     default:
//       break;
//   }
// };
