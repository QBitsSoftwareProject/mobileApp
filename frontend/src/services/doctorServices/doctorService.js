import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BACKEND_URI } from "../../config/env";

const URL = BACKEND_URI + "/doctor";

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
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
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
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
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
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(URL, {
      headers: { authtoken: token },
    });
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const getADoctor = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(`${URL}/one-doctor`, {
      headers: { authtoken: token },
    });
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const viewADoctor = async (doctorId) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.post(`${URL}/view-doctor`, doctorId, {
      headers: { authtoken: token },
    });
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request ");
  }
};

export const updateADoctor = async (updates) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.put(`${URL}`, updates, {
      headers: { authtoken: token },
    });
    // console.log(response);
    // return response;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};
