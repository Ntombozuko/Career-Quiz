import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Import your global styles
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import reportWebVitals from "./reportWebVitals";

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Log web vitals for performance measurement
reportWebVitals();
