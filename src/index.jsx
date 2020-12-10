import React from "react";
import App from "./components/app";
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
