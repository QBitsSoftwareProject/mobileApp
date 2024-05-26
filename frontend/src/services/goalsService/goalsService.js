import axios from "axios";
import { BACKEND_URI } from "../../config/env";

const URL = BACKEND_URI + "/goal";

export const getSuggestedGoals = async () => {
  try {
    const response = await axios.get(URL);
    // console.log(response.data);
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
