import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.less";

import "./index.scss";
import App from "./components/App/App";
import reportWebVitals from "./bin/report-web-vitals";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your App, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
