import axios from "axios";
import { BACKEND_URI } from "../../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = BACKEND_URI + "/task";

export const getSuggestedTasks = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(URL + "/suggested-task", {
      headers: { authtoken: token },
    });
    // consolse.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const viewASelectedTask = async (id) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(URL + "/get-one/" + id, {
      headers: { authtoken: token },
    });
    // consolse.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};
