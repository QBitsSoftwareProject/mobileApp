import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://192.168.8.110:8070",
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosInstance;