import React from "react";
import PropTypes from "prop-types";
import getGym from "../actions/getGym.action";
import { connect } from "react-redux";
import { Route } from "react-router";
import Dashboard from "./Dashboard";
import Routes from "./Routes";

class Gym extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-2">
            <ul>
              <li
                onClick={() =>
                  this.props.history.push(
                    `/gyms/${this.props.match.params.gymId}/dashboard`
                  )
                }
              >
                Home
              </li>
              <li
                onClick={() =>
                  this.props.history.push(
                    `/gyms/${this.props.match.params.gymId}/routes`
                  )
                }
              >
                Routes
              </li>
            </ul>
          </div>
          <Route
            path={`${this.props.match.url}/dashboard`}
            render={props => (
              <Dashboard gymId={this.props.match.params.gymId} {...props} />
            )}
          />
          <Route
            path={`${this.props.match.url}/routes`}
            render={props => (
              <Routes gymId={this.props.match.params.gymId} {...props} />
            )}
          />
        </div>
      </div>
    );
  }
}

Gym.propTypes = {
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
)(Gym);
