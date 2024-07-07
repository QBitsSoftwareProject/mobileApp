import axios from "axios";
import { BACKEND_URI } from "../../config/env";

const URL = BACKEND_URI + "/email";

const sendEmail = async (email, pin) => {
  try {
    const response = await axios.post(URL + "/send-email", { email, pin });
    return response.data;
  } catch (error) {
    console.error("Error sending email:", error.response.data);
    throw error.response.data;
  }
};

module.exports = sendEmail;
