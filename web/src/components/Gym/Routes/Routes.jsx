import React from "react";
import getGym from "../../../actions/getGym.action";
import getGymRoutes from "../../../actions/getGymRoutes.action";
import { connect } from "react-redux";
import CreateRoute from "./CreateRoute";
import { Route } from "react-router";
import RouteRow from "./RouteRow";

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "routes"
    };
  }

  componentDidMount() {
    this.props.getGymRoutes(parseInt(this.props.gymId));
  }

  showCreateRoute() {
    this.setState({
      tab: "createRoute"
    });
  }

  renderRoutesTable() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Grade</th>
            <th>Zone</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.props.routes.map(route => (
            <tr key={route.id}>
              <td>{route.name}</td>
              <td>{route.grade}</td>
              <td>{route.zone}</td>
              <td>
                <button
                  className="btn btn-link"
                  onClick={() =>
                    this.props.history.push(
                      `/gyms/${this.props.gymId}/routes/${route.id}`
                    )
                  }
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        <h1>Routes</h1>

        <Route
          exact
          path={`${this.props.match.url}`}
          render={() => (
            <div>
              {this.renderRoutesTable()}

              <button
                className="btn btn-outline-primary mb-2"
                onClick={() =>
                  this.props.history.push(
                    `/gyms/${this.props.gymId}/routes/create`
                  )
                }
              >
                Create Route
              </button>
            </div>
          )}
        />

        <Route
          path={`${this.props.match.url}/create`}
          render={props => <CreateRoute gymId={this.props.gymId} {...props} />}
        />
      </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
