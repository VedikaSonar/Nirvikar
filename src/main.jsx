import React from "react";
import "./jquery-global.js";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
/* Template CSS */
// import "./assets/css/bootstrap.min.css";
// import "./assets/css/font-awesome.min.css";
// import "./assets/css/flatpickr.min.css";
// import "./assets/css/select2.min.css";
// import "./assets/css/swiper-bundle.min.css";
// import "./assets/css/style.css";
// import "./assets/css/responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
