import React from "react";
import ReactDOM from "react-dom/client";
import "tailwindcss/tailwind.css";
import App from "./App";

const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
