import axios from "axios";
import { BACKEND_URI } from "../../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = BACKEND_URI + "/report";

export const createReport = async (reportedPostId, reportStatement) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.post(
      URL + "/create-report",
      {
        reportedPostId,
        reportStatement,
      },
      {
        headers: { authtoken: token },
      }
    );
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};
