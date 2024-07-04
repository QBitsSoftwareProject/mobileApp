const doctorModel = require("../../models/doctor/doctor");
const appointmentModel = require("../../models/appointments/appointmentsModels");

exports.viewADoctor = async (req, res) => {
  try {
    const { doctorId } = req.body;
    const getDoctor = await doctorModel.findById(doctorId);
    const getAppointment = await appointmentModel.find({ doctorId: doctorId });

    const getWeekRange = (date) => {
      const start = new Date(date);
      start.setHours(0, 0, 0, 0);
      start.setDate(start.getDate() - start.getDay()); // Sunday

      const end = new Date(start);
      end.setDate(start.getDate() + 6); // Saturday
      end.setHours(23, 59, 59, 999);

      return { start, end };
    };

    const getAvailableTimes = (availableTimes, appointments) => {
      const now = new Date();
      const { start, end } = getWeekRange(now);

      return availableTimes.map((dayTimes, index) => {
        return dayTimes.filter((timeSlot) => {
          return !appointments.some((appointment) => {
            const appointmentDate = new Date(appointment.date);

            // Check if the appointment is within the same week and has already passed
            const isSameDay = appointmentDate.getDay() === index;
            const isPastDate =
              appointmentDate > now &&
              appointmentDate >= start &&
              appointmentDate <= end;

            return (
              isSameDay &&
              isPastDate &&
              JSON.stringify(timeSlot) == JSON.stringify(appointment.time)
            );
          });
        });
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

    if (!getDoctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    return res.status(201).json(doctorDetails);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "User fetch failed", err: err.message });
  }
};
