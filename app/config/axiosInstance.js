import axios from "axios";
import { API_ROUTES } from "./config";

const baseURL =
  typeof window === "undefined"
    ? process.env.PUBLIC_BASE_URL + "/api"
    : "/api";

const axiosInstance = axios.create({
    baseURL,
    timeout:10000,
})

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.code === "ECONNABORTED") {
      console.warn("Request timed out — handled silently.");
      return Promise.resolve({ data: null, success:false }); 
    }

    if (!error.response) {
      console.warn("Network error (server unreachable)", error);
      return Promise.resolve({ data: null, success: false });
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;