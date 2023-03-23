import React from "react";
import ReactDOM from "react-dom/client";
// import React BootStrap Library
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import FontAwesome Library
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/react-toastify/dist/ReactToastify.css";
// style
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
