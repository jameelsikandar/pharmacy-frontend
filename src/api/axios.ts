// src/api/axios.ts
import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:8000/api/v1", // change if different
});

export default Api;
