import axios from "axios";
import { BACKEND_URI } from "../config/env";

const axiosInstance = axios.create({
  baseURL: BACKEND_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
