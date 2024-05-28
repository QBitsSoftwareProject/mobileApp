import axios from "axios";
import { BACKEND_URI } from "../../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = BACKEND_URI + "/goal";
const USER_URL = BACKEND_URI + "/user";

export const getSuggestedGoals = async () => {
  try {
    const response = await axios.get(URL);
    // consolse.log(response.data);
    return response.data;
  } catch (error) {
    //   console.log(error);
    throw new Error("Error during request setup");
  }
};

export const getASuggestedGoals = async (id) => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const getSelectedGoals = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(USER_URL + "/one-user", {
      headers: { authtoken: token },
    });
    // console.log(response.data.selectedGoals);
    return response.data.selectedGoals;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const getTheReleventGoal = async (id) => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const addAGoal = async (goal) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    console.log(goal);
    const response = await axios.post(URL + "/add-goal", goal, {
      headers: { authtoken: token },
    });
    // console.log(response);
    // return response;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};
