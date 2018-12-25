import React from "react";
import { Route, Switch } from "react-router";
import Register from "../components/Register";
import Landing from "../components/Landing";
import RegisterGym from "../components/RegisterGym";
import RegisterClimber from "../components/RegisterClimber";

const routes = (
  <div>
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/register/climber" component={RegisterClimber} />
      <Route exact path="/register/gym" component={RegisterGym} />
      {/* <Route exact path="/" component={Landing} /> */}
      <Route component={Landing} />
    </Switch>
  </div>
);

export default routes;
