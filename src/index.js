import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ContextProvider } from "./context/DataContext";
import { ContextAuth } from "./context/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
        <ContextAuth>
          <App />
        </ContextAuth>
      </ContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
