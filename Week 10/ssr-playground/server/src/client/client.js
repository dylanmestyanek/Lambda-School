/*=== startup point for the client side app ===*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/Routes";

ReactDOM.hydrate(
  <Router>
    <Routes />
  </Router>,
  document.querySelector("#root")
);
