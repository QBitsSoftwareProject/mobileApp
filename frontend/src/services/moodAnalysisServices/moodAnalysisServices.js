import axios from "axios";
import { BACKEND_URI } from "../../config/env";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
const URL = BACKEND_URI + "/moodEntries";

// add mood
export const addMood = async (selectedEmoji, moodText, time, date, count) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.post(
      `${URL}/mood-create`,
      {
        selectedEmoji,
        moodText,
        time,
        date,
        count,
      },
      {
        headers: { authtoken: token },
      }
    );
    return response.data;
  } catch (error) {
    console.log(
      "Error during mood setups:",
      error.response ? error.response.data : error.message
    );
  }
};

//get moods by userId
export const getMoodsByUserId = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.get(`${URL}/mood-entries-get`, {
      headers: { authtoken: token },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during ttttt setup");
  }
};
