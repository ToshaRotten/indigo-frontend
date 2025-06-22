import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#86be20",
          borderRadius: 50,
        },
        components: {
          Button: {
            controlHeight: 60,
          },
          Alert: {
            colorInfoBg: "#f6ffed",
            colorInfoBorder: "#b7eb8f",
            colorInfo: "#86be20",

            colorErrorBg: "#fff2e8",
            colorErrorBorder: "#ffbb96",
            colorError: "#ff4d4f",
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
