import axios from "axios";

const URL = "http://192.168.43.38:3000/api/v1/appointments"

export const createAppointment = async (doctorId, userId, date, time) => {
    try {

      const response =  await axios.post(URL, { doctorId, userId, date, time });
        // console.log(response);
      return response; 

    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
}
