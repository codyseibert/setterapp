import React from "react";
import PropTypes from "prop-types";

const Register = props => (
  <div>
    <div className="row">
      <div className="col-sm">
        <h1>Want to Track Sends?</h1>
        <button
          className="btn btn-secondary"
          onClick={() => props.history.push("/register/climber")}
        >
          Climber Registration
        </button>
      </div>
      <div className="col-sm">
        <h1>Want to Manage Routes?</h1>
        <button
          className="btn btn-info"
          onClick={event => {
            props.history.push("/register/gym");
            event.preventDefault();
          }}
        >
          Gym Registration
        </button>
      </div>
    </div>
  </div>
);

Register.propTypes = {
  history: PropTypes.object.isRequired
};

export default Register;
