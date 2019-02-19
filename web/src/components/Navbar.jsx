import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import signout from "../actions/signout.action";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Setter
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
      </ul>
      {!props.token && (
        <button
          className="btn btn-outline-primary mr-2"
          onClick={() => props.history.push("/login")}
        >
          Login
        </button>
      )}

      {props.token && (
        <button
          className="btn btn-outline-secondary mr-2"
          onClick={props.signout}
        >
          Sign Out
        </button>
      )}

      {!props.token && (
        <button
          className="btn btn-primary"
          onClick={() => props.history.push("/register")}
        >
          Sign Up
        </button>
      )}
    </div>
  </nav>
);

Navbar.propTypes = {
  history: PropTypes.object.isRequired,
  token: PropTypes.string,
  signout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  token: state.token
});

const mapDispatchToProps = dispatch => ({
  signout: event => {
    dispatch(signout());
    event.preventDefault();
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
