import axios from "axios";
import { BACKEND_URI } from "../../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = BACKEND_URI + "/notification";

export const getNotification = async (lastCreatedAt, limit) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(
      URL + "/get-notification",

      {
        headers: { authtoken: token },
        params: {
          lastCreatedAt: lastCreatedAt || "",
          limit: limit || 10,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error.response.data);
    throw new Error("Error during request setup");
  }
};

export const notificationStatusUpdate = async (id) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(
      URL + "/status-update/" + id,

      {
        headers: { authtoken: token },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error.response.data);
    throw new Error("Error during request setup");
  }
};

export const checkUnreadNotification = async (id) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(URL + "/check-notification", {
      headers: { authtoken: token },
    });

    return response.data;
  } catch (error) {
    console.log(error.response.data);
    throw new Error("Error during request setup");
  }
};

export const deleteAllNotification = async (id) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.delete(URL + "/delete-notifications", {
      headers: { authtoken: token },
    });

    return response.data;
  } catch (error) {
    console.log(error.response.data);
    throw new Error("Error during request setup");
  }
};
