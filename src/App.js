import React from "react";
import "./assets/fonts/vazir/font.css";
import "./assets/styles/index.scss";
// import Layout from "./layout";
import "antd/dist/reset.css";
// import AkoForm from "./components/form";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import router from "./router/index.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
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
    </BrowserRouter>
  );
};

export default App;
