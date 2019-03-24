import React from "react";
import PropTypes from "prop-types";

const Landing = props => (
  <div>
    Welcome to Setter
    <button onClick={() => props.history.push("/register")}>Register</button>
  </div>
);

export default Landing;
