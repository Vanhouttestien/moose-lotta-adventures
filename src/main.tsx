import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

const base = "/moose-lotta-adventures/";

// ✅ restore deep link from GitHub Pages 404 redirect
const redirect = sessionStorage.redirect;

if (redirect) {
  sessionStorage.removeItem("redirect");

  window.history.replaceState(
    null,
    "",
    base + redirect.replace(/^\/+/, "")
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);