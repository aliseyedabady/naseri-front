import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ContextProvider from "./context";
import reportWebVitals from "./reportWebVitals";
import theme from "./utils/theme";
import validation from "./utils/validation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <ConfigProvider
        theme={{ token: theme }}
        form={{ validateMessages: validation }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </ContextProvider>
  </React.StrictMode>
);

reportWebVitals();
