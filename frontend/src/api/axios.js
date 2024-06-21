import axios from "axios";
import { BACKEND_URI } from "../config/env";

const axiosInstance = axios.create({
  baseURL: "http://192.168.8.104:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
