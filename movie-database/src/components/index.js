import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import reportWebVitals from "../reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";

const appID = document.getElementById("app");
const renderApp = () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>,
    appID
  );
};

renderApp();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
