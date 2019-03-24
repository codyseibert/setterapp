import React from "react";
import { connect } from "react-redux";
import setFormKey from "../actions/setFormKey.action";
import registerUser from "../actions/registerUser.action";

const RegisterClimber = props => (
  <div>
    <div className="row">
      <div className="col-sm">
        <h1>Climber Registration</h1>
        <form onSubmit={props.registerUser}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="name"
              className="form-control"
              id="name"
              placeholder="Your Name"
              value={props.form.name || ""}
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
              aria-describedby="passwordHelp"
              placeholder="Your Password"
              value={props.form.password || ""}
              onChange={props.setFormKey}
            />
            <small id="passwordHelp" className="form-text text-muted">
              Must be at least 6 characters
            </small>
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
  registerUser: event => {
    dispatch(registerUser());
    event.preventDefault();
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterClimber);
