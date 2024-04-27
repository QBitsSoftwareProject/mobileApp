import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = "http://192.168.8.149:3000/api/v1/doctor";

//user registration
export const doctorRegistration = async (
  fullName,
  userName,
  email,
  password,
  contactNumber,
  address,
  city,
  country,
  licenseSide1,
  licenseSide2,
  specialization,
  qualification,
  availableDays,
  availableTimesDay1,
  availableTimesDay2,
  availableTimesDay3,
  availableTimesDay4,
  availableTimesDay5,
  availableTimesDay6,
  availableTimesDay7,
  proPic,
  bio
) => {
  try {
    const response = await axios.post(`${URL}/register`, {
      fullName,
      userName,
      email,
      password,
      contactNumber,
      address,
      city,
      country,
      licenseSide1,
      licenseSide2,
      specialization,
      qualification,
      availableDays,
      availableTimesDay1,
      availableTimesDay2,
      availableTimesDay3,
      availableTimesDay4,
      availableTimesDay5,
      availableTimesDay6,
      availableTimesDay7,
      proPic,
      bio,
    });
    // console.log(response)
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const getDoctors = async () => {
  try {
    const response = await axios.get(URL, {
      headers: { authtoken: AsyncStorage.getItem("token") },
    });
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const getADoctor = async (id) => {
  try {
    const response = await axios.get(`${URL}/${id}`, {
      headers: { authtoken: AsyncStorage.getItem("token") },
    });
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};
