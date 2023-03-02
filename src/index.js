import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from "./utils/theme";
import validation from "./utils/validation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{ token: theme }}
      form={{ validateMessages: validation }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

reportWebVitals();
