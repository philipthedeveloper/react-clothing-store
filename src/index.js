import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/app";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Context from "./components/Context";

ReactDOM.render(
  <Context>
    <Router>
      <App />
    </Router>
  </Context>,
  document.querySelector("#root")
);
