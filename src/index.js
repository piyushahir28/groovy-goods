import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ContextProvider } from "./context/DataContext";
import { AuthProvider } from "./context/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
