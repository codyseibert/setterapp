import React from "react";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import routes from "./routes";

const App = ({ history }) => {
  return (
    <div className="container">
      <ConnectedRouter history={history}>{routes}</ConnectedRouter>
    </div>
  );
};

App.propTypes = {
  history: PropTypes.object
};

export default App;
