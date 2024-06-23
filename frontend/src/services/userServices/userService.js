import axios from "axios";
import { BACKEND_URI } from "../../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = BACKEND_URI + "/user";

//user login
export const userLogin = async (email, password) => {
  try {
    const response = await axios.post(`${URL}/login`, { email, password });

    // Check if the response contains the token in headers
    if (!response.headers || !response.headers.authtoken) {
      throw new Error("Token not found in response headers");
    }

    const token = response.headers.authtoken;

    // Store token in AsyncStorage
    await AsyncStorage.setItem("authToken", token);

    return response.data;
  } catch (err) {
    console.log(err.response.data);
    throw new Error("Error during request setup");
  }
};

//user registration
export const userRegistration = async (
  fullName,
  userName,
  email,
  password,
  contactNumber,
  address,
  city,
  country,
  proPic
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
      proPic,
    });
    // console.log(response)
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    throw new Error("Error during request setup");
  }
};

export const getUser = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(URL, {
      headers: { authtoken: token },
    });
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    throw new Error("Error during request setup");
  }
};

export const getAUser = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(`${URL}/one-user`, {
      headers: { authtoken: token },
    });

    return response.data;
  } catch (err) {
    throw new Error(err.response.status);
  }
};

export const getUserById = async (userId) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(`${URL}/user-by-id/` + userId, {
      headers: { authtoken: token },
    });
    // console.log(response.data)
    return response.data;
  } catch (err) {
    console.log(err.response.data);
    throw new Error("Error during request setup");
  }
};

export const updateAUser = async (updates) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.put(`${URL}`, updates, {
      headers: { authtoken: token },
    });
    // console.log(response);
    // return response;
  } catch (error) {
    console.log(error.response.data);
    throw new Error("Error during request setup");
  }
};
