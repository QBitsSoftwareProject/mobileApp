const doctorModel = require("../../models/doctor/doctor");
const appointmentModel = require("../../models/appointments/appointmentsModels");

exports.viewADoctor = async (req, res) => {
  try {
    const { doctorId } = req.body;
    const getDoctor = await doctorModel.findById(doctorId);
    const getAppointment = await appointmentModel.find({ doctorId: doctorId });

    const getNext7DaysRange = () => {
      const start = new Date();
      start.setHours(0, 0, 0, 0);

      const end = new Date(start);
      end.setDate(start.getDate() + 7);
      end.setHours(23, 59, 59, 999);

      return { start, end };
    };

    const getAvailableTimes = (availableTimes, appointments) => {
      // const now = new Date();
      const { start, end } = getNext7DaysRange();

      return availableTimes.map((dayTimes, index) => {
        return dayTimes.filter((timeSlot) => {
          return !appointments.some((appointment) => {
            const appointmentDate = new Date(appointment.date);

            // Check if the appointment is within the next 7 days
            const isSameDay = appointmentDate.getDay() === index;
            const isWithinNext7Days =
              appointmentDate >= start && appointmentDate <= end;

            return (
              isSameDay &&
              isWithinNext7Days &&
              JSON.stringify(timeSlot) == JSON.stringify(appointment.time)
            );
          });
        });
      });
    };

    if (!getDoctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

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

    return res.status(201).json(doctorDetails);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "User fetch failed", err: err.message });
  }
};
