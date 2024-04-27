import axios from "axios";
const URL = "http://192.168.8.149:3000/api/v1/user";

export const checkExistsUser = async (email) => {
  try {
    const response = await axios.post(`${URL}/checkExistsUser`, { email });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};
