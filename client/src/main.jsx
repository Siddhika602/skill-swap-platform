import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";
import CursorGlow from "./components/CursorGlow";

import "./App.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CursorGlow />

    <App />

    <Toaster position="top-right" />
  </BrowserRouter>
);
