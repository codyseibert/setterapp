import React from "react";
import { connect } from "react-redux";
import setFormKey from "../actions/setFormKey.action";
import login from "../actions/login.action";
import PropTypes from "prop-types";

const Login = props => (
  <div>
    <div className="row">
      <div className="col-sm">
        <h1>Login</h1>
        <form onSubmit={props.login}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Your Email"
              value={props.form.email || ""}
              onChange={props.setFormKey}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
              aria-describedby="passwordHelp"
              placeholder="Your Password"
              value={props.form.password || ""}
              onChange={props.setFormKey}
            />
          </div>

          <input type="submit" value="Login" className="btn btn-primary" />
        </form>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  form: state.form
});

const mapDispatchToProps = dispatch => ({
  setFormKey: event => {
    dispatch(
      setFormKey({
        key: event.target.name,
        value: event.target.value
      })
    );
  },
  login: event => {
    dispatch(login());
    event.preventDefault();
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
