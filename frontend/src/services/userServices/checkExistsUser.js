import axios from "axios";
import { BACKEND_URI } from "../../config/env";

const URL = BACKEND_URI + "/user";

export const checkExistsUser = async (email) => {
  try {
    const response = await axios.post(`${URL}/checkExistsUser`, { email });

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};
