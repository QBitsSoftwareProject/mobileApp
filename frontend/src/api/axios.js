import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://10.10.11.15:8070",
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosInstance;