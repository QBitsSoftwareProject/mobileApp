import axios from "axios";
import { BACKEND_URI } from "../../config/env";

const URL = BACKEND_URI + "/doctor";

export const checkExistsDoctor = async (email) => {
  try {
    const response = await axios.post(`${URL}/checkExistsDoctor`, { email });
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    throw new Error("Error during request setup");
  }
};
