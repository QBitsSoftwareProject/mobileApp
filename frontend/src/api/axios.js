import axios from "axios";
import { BASE_URI } from "../config/env";

const axiosInstance = axios.create({
  baseURL: BASE_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
