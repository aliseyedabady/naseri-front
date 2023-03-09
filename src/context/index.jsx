import { createContext, useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { serialize } from "object-to-formdata";
import axios from "axios";
import { API_SERVER } from "../Server";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

const context = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    lang: JSON.parse(localStorage.getItem("lang")) || "fa",
  };
  const [state, setState] = useState(initialState);

  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.access_token) {
    axios.defaults.headers.post[
      "Authorization"
    ] = `Bearer ${user.access_token}`;
  }
  const server = axios.create({
    baseURL: API_SERVER,
    headers: {
      "Accept-Language": JSON.parse(localStorage.getItem("lang")) || "fa",
    },
  });
  const dispatch = (key, value) => {
    if (value) {
      setState({ ...state, [key]: value });
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      const newState = { ...state };
      delete newState[key];
      setState({ newState });
      localStorage.removeItem(key);
    }
  };
  const post = async (url, body, message = false) => {
    try {
      const response = await server.post(url, serialize(body));
      if (message && response.data.message) {
        toast.success(response.data.message);
      }
      return {
        data: response.data.data,
        status: response.status,
      };
    } catch (error) {
      const {
        response: { status, data },
      } = error;
      switch (+status) {
        case 400:
          toast.error(data.message);
          break;
        case 401:
          localStorage.clear();
          window.location.replace("/");
          toast.error(data.message);
          break;
        case 500:
          toast.error(data.message);
        default:
          toast.error(data.message);
          break;
      }
      return {};
    }
  };
  const put = async (url, body, message = false) => {
    try {
      const response = await server.post(
        url,
        serialize({ _method: "PUT", ...body })
      );
      if (message && response.data.message) {
        toast.success(response.data.message);
      }
      return {
        data: response.data.data,
        status: response.status,
      };
    } catch (error) {
      const {
        response: { status, data },
      } = error;
      switch (+status) {
        case 400:
          toast.error(data.message);
          break;
        case 401:
          localStorage.clear();
          window.location.replace("/");
          toast.error(data.message);
          break;
        case 500:
          toast.error(data.message);
        default:
          toast.error(data.message);

          break;
      }
      return {};
    }
  };
  const get = async (url, body, message = false) => {
    try {
      const response = await server.get(url);

      return {
        data: response.data.data,
        status: response.status,
      };
    } catch (error) {
      const {
        response: { status, data },
      } = error;
      switch (+status) {
        case 400:
          toast.error(data.message);
          break;
        case 401:
          localStorage.clear();
          window.location.replace("/");
          toast.error(data.message);
          break;
        case 500:
          toast.error(data.message);
        default:
          toast.error(data.message);

          break;
      }
      return {};
    }
  };
  const del = async (url, body, message = false) => {
    try {
      const response = await server.delete(url, { _method: "DELETE" });

      return {
        data: response.data.data,
        status: response.status,
      };
    } catch (error) {
      const {
        response: { status, data },
      } = error;
      switch (+status) {
        case 400:
          toast.error(data.message);
          break;
        case 401:
          localStorage.clear();
          window.location.replace("/");
          toast.error(data.message);
          break;
        case 500:
          toast.error(data.message);
        default:
          toast.error(data.message);

          break;
      }
      return {};
    }
  };
  const logout = async () => {
    setState({ ...state, loading: true });
    const { data, status } = await post("/logout");
    if (+status === 200) {
      setState({ ...state, loading: false });

      localStorage.removeItem("user");
      window.location.replace("/");
    }
  };
  const isLogin = () => {
    return state?.user?.access_token && state?.user?.user?.role !== "user"
      ? true
      : false;
  };
  return (
    <context.Provider
      value={{ state, dispatch, post, logout, put, del, get, isLogin }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
export const useMainContext = () => {
  return useContext(context);
};
