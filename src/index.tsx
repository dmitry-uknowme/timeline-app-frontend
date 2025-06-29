import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/app";

const rootElement = document.querySelector("#root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
