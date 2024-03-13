import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://172.20.10.6:3000",
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosInstance;