import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./app/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("store", store);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
