import axios from "axios";
const URL = "http://192.168.8.149:3000/api/v1/doctor";

export const checkExistsDoctor = async (email) => {
  try {
    const response = await axios.post(`${URL}/checkExistsDoctor`, { email });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};
