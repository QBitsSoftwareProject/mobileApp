import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.43.51:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
