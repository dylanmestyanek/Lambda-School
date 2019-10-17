import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "../components/App";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  );
};
