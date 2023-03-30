import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AxiosConfig from "./config/axios-config.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AxiosConfig>
      <App />
    </AxiosConfig>
  </React.StrictMode>
);
