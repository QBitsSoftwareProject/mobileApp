import axios from "axios";
import { BACKEND_URI } from "../../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
// export const tokenExpCheck = async () => {
//   try {
//     const token = await AsyncStorage.getItem("authToken");
//     const response = await axios.post("/token-check", {
//       headers: { authtoken: token },
//     });

//     return 201;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.response.status);
//   }
// };
