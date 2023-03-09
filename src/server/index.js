import { toast } from "react-toastify";
import { serialize } from "object-to-formdata";
import axios from "axios";
export const API_SERVER = "http://192.168.1.103:8000/api";

axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

const user = JSON.parse(localStorage.getItem("user"));
if (user && user.access_token) {
  axios.defaults.headers.post["Authorization"] = `Bearer ${user.access_token}`;
}

export const server = axios.create({
  baseURL: API_SERVER,
});
