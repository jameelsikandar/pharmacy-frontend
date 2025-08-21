import axios, { type AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1/",
  withCredentials: true, // if using cookies (optional)
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
