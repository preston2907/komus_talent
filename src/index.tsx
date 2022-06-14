import React from "react";
import ReactDom from "react-dom";
import App from "./app";

const appRoot = document.getElementById("komus-talents");

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  appRoot
);

