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
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const getUserAppointments = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.get(URL + "/user-appointment", {
      headers: { authtoken: token },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const getDoctorPendingAppointments = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.get(URL + "/doctor-pending-appointment", {
      headers: { authtoken: token },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const getDoctorAcceptedAppointments = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.get(URL + "/doctor-accepted-appointment", {
      headers: { authtoken: token },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const getDoctorCompletedAppointments = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.get(URL + "/doctor-completed-appointment", {
      headers: { authtoken: token },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const getDoctorRejectedAppointments = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.get(URL + "/doctor-rejected-appointment", {
      headers: { authtoken: token },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const getDoctorCancelledAppointments = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.get(URL + "/doctor-cancelled-appointment", {
      headers: { authtoken: token },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const updateStatusAppointments = async (appId, appStatus) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.put(
      URL + "/appointment-status",
      { appointmentId: appId, newStatus: appStatus },
      {
        headers: { authtoken: token },
      }
    );
  } catch (error) {
    console.log(error.response.data);
    throw new Error("Error during request setup");
  }
};

export const deleteAllAppointments = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.delete(URL + "/delete-appointments/", {
      headers: { authtoken: token },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const deleteAnAppointment = async (appointmentId) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.delete(
      URL + "/delete-an-appointment/" + appointmentId,
      {
        headers: { authtoken: token },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

// export const getAvailableTimes = async (doctorId, date) => {
//   try {
//     const token = await AsyncStorage.getItem("authToken");

//     const response = await axios.get(URL + "/available-times/" + doctorId, {
//       params: { date },
//       headers: { authtoken: token },
//     });
//     console.log(response.data.availableTimes);
//     return response.data.availableTimes;
//   } catch (error) {
//     console.log(error);
//     throw new Error("Error fetching available times");
//   }
// };
