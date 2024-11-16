import axios from "axios";
import { Cookie } from "../utils/cookie";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = Cookie.get("accessToken");
    if (accessToken) {
      config.headers.Authorization = `${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
