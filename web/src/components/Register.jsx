import React from "react";
import { connect } from "react-redux";
import { setFormKey } from "../actions/setFormKey.action";
import { register } from "../actions/register.action";
import PropTypes from "prop-types";

const Register = props => (
  <form onSubmit={props.register}>
    <div className="form-group">
      <label htmlFor="gymName">Gym Name</label>
      <input
        name="gymName"
        type="gymName"
        className="form-control"
        id="gymName"
        placeholder="Your Gym Name"
        value={props.form.password}
        onChange={props.setFormKey}
      />
    </div>

    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input
        name="email"
        type="email"
        className="form-control"
        id="email"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        value={props.form.password}
        onChange={props.setFormKey}
      />
      <small id="emailHelp" className="form-text text-muted">
        We will never share your email with anyone else.
      </small>
    </div>

    <input type="submit" value="Submit" />
  </form>
);

Register.propTypes = {
  register: PropTypes.func.isRequired,
  setFormKey: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired
};

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
  register: event => {
    console.log("register");
    dispatch(register());
    event.preventDefault();
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
