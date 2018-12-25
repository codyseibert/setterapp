import React from "react";
import { Route, Switch } from "react-router";
import Register from "../components/Register";

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Register} />
      <Route component={Register} />
    </Switch>
  </div>
);

export default routes;
