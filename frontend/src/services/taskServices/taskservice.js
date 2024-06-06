import axios from "axios";
import { BACKEND_URI } from "../../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = BACKEND_URI + "/task";

export const getSuggestedTasks = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(URL + "/get-all", {
      headers: { authtoken: token },
    });
    // consolse.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const getAGoal = async (id) => {
  try {
    const response = await axios.get(`${URL}/get-one/${id}`);

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const getSelectedTasks = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(URL + "/selected-Tasks", {
      headers: { authtoken: token },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const addAGoal = async (goal) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
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

export const updateCompleteness = async (data) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.put(`${URL}/update-completeness`, data, {
      headers: { authtoken: token },
    });

    // return response;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const deleteASelectedGoal = async (goalId) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.put(`${URL}/delete-selected-goal`, goalId, {
      headers: { authtoken: token },
    });

    // return response;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const getCompletedTasks = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(URL + "/completed-Tasks", {
      headers: { authtoken: token },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};
