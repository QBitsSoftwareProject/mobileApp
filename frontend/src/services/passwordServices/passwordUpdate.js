import axios from "axios";
import { BACKEND_URI } from "../../config/env";

const URL = BACKEND_URI + "/password";

const passwordUpdate = async (password, id, role) => {
  try {
    const response = await axios.post(URL + "/update-password", {
      password,
      id,
      role,
    });
    return response.data;
  } catch (error) {
    console.error("Error sending email:", error.response.data);
    throw error.response.data;
  }
};

module.exports = passwordUpdate;
