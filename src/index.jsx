import React from "react";
import App from "./components/app.jsx";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";

// const appID = document.getElementById("app");
// const renderApp = () => {
//   render(
//     <HashRouter>
//       <App />
//     </HashRouter>,
//     appID
//   );
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
