import React from "react";
import getGym from "../../../actions/getGym.action";
import getGymRoutes from "../../../actions/getGymRoutes.action";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class RouteRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.route.name}</td>
        <td>{this.props.route.grade}</td>
        <td>{this.props.route.zone}</td>
        <td>
          <button
            className="btn btn-link"
            onClick={() =>
              this.props.history.push(
                `/gyms/${this.props.gymId}/routes/${this.props.route.id}`
              )
            }
          >
            View
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
  gym: state.gym,
  routes: state.routes
});

const mapDispatchToProps = dispatch => ({
  getGym: gymId => {
    dispatch(getGym(gymId));
  },
  getGymRoutes: gymId => {
    dispatch(getGymRoutes(gymId));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RouteRow)
);
