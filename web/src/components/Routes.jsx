import React from "react";
import PropTypes from "prop-types";
import getGym from "../actions/getGym.action";
import { connect } from "react-redux";

class Routes extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Routes</h1>
      </div>
    );
  }
}

Routes.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  gym: PropTypes.object.isRequired,
  getGym: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  gym: state.gym
});

const mapDispatchToProps = dispatch => ({
  getGym: gymId => {
    dispatch(getGym(gymId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
