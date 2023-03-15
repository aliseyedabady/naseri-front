import axios from "axios";
export const API_SERVER = "http://localhost:8000/api";

export const server = axios.create({
  baseURL: API_SERVER,
});
