import React from "react";
import "./assets/fonts/vazir/font.css";
import "./assets/styles/index.scss";
import "react-toastify/dist/ReactToastify.css";
// import Layout from "./layout";
import "antd/dist/reset.css";
// import AkoForm from "./components/form";
import { Routes, Route, useLocation } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import router from "./router/index.js";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";


const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {router.map((route, i) => {
          return (
            <Route
              key={i}
              path={route.path}
              element={
                <route.layout>
                  <route.component />
                </route.layout>
              }
            />
          );
        })}
      </Routes>
      <ToastContainer rtl />

    </AnimatePresence>
  );
};

export default App;
