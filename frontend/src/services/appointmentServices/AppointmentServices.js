import axios from "axios";
import { BACKEND_URI } from "../../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = BACKEND_URI + "/appointments";

export const createAppointment = async (doctorId, date, time) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.post(
      `${URL}`,
      { doctorId, date, time },
      {
        headers: { authtoken: token },
      }
    );
    // console.log(response);
    // return response;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};
