import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App"; // Import your main App component
import "../src/styles.css"; // Import your consolidated CSS file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
