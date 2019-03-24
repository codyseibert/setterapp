import React from "react";
import { connect } from "react-redux";
import setFormKey from "../actions/setFormKey.action";
import registerGym from "../actions/registerGym.action";
import PropTypes from "prop-types";

const RegisterGym = props => (
  <div>
    <div className="row">
      <div className="col-sm">
        <h1>Gym Registration</h1>
        <form onSubmit={props.registerGym}>
          <div className="form-group">
            <label htmlFor="gymName">Gym Name</label>
            <input
              name="gymName"
              type="gymName"
              className="form-control"
              id="gymName"
              placeholder="Your Gym Name"
              value={props.form.gymName || ""}
              onChange={props.setFormKey}
            />
          </div>

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
            <small id="emailHelp" className="form-text text-muted">
              We will never share your email with anyone else.
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
              placeholder="Your Password"
              value={props.form.password || ""}
              onChange={props.setFormKey}
            />
          </div>

          <input type="submit" value="Register" className="btn btn-primary" />
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
  registerGym: event => {
    dispatch(registerGym());
    event.preventDefault();
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterGym);
