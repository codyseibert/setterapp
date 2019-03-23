import React from "react";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import routes from "./routes";
import Navbar from "./components/Navbar";

const App = ({ history }) => {
  return (
    <div>
      <Navbar history={history} />
      <div className="container-fluid">
        <ConnectedRouter history={history}>{routes}</ConnectedRouter>
      </div>
    </div>
  );
};

App.propTypes = {
  history: PropTypes.object
};

export default App;
