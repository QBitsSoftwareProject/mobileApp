import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BACKEND_URI } from "../../config/env";

const URL = BACKEND_URI + "/Feedback";

//user registration
export const addFeedback = async (
  satisfication,
  finterface,
  privacy,
  speed,
  consumption,
  design,
  comment,
  date,
  time
) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.post(
      `${URL}/add-feedback`,
      {
        satisfication,
        finterface,
        privacy,
        speed,
        consumption,
        design,
        comment,
        date,
        time,
      },
      {
        headers: { authtoken: token },
      }
    );
    // console.log(response)
    return response.data;
  } catch (error) {
    console.log("gghj", error);
    throw new Error("Error during request setup");
  }
};

//get journals
export const deleteJournal = async (id) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.get(`${URL}/delete-journal/${id}`, {
      headers: { authtoken: token },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("errr");
  }
};
