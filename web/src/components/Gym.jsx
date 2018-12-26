import React from "react";
import PropTypes from "prop-types";

const Gym = props => (
  <div>
    <div className="row">
      <div className="col-sm">
        <h1>Gym Dashboard</h1>
      </div>
    </div>
  </div>
);

Gym.propTypes = {
  history: PropTypes.object.isRequired
};

export default Gym;
