import React from "react";
import { connect } from "react-redux";
import { simpleAction } from "../actions/simple.action";

const Hello = props => (
  <div>
    <h1>TESTING</h1>
    <button onClick={props.simpleAction}>Hello</button>
  </div>
);

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
