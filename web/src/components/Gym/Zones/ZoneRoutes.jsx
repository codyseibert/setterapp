import React from "react";
import getZoneRoutes from "../../../actions/getZoneRoutes.action";
import getZone from "../../../actions/getZone.action";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import CreateRoute from "../Routes/CreateRoute";
import Alert from "../../Alert";
import RouteRow from "../Routes/RouteRow";
import unsendRoute from "../../../actions/unsendRoute.action";
import sendRoute from "../../../actions/sendRoute.action";
import getSends from "../../../actions/getSends.action";
import GymRoute from "../GymRoute";
import LoadingButton from "../../shared/LoadingButton";
import SendButton from "../../shared/SendButton";

class ZoneRoutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "routes"
    };
  }

  componentDidMount() {
    this.props.getZoneRoutes(parseInt(this.props.match.params.zoneId));
    this.props.getZone(parseInt(this.props.match.params.zoneId));
    this.props.getSends(parseInt(this.props.user.id));
  }

  showCreateRoute() {
    this.setState({
      tab: "createRoute"
    });
  }

  renderZoneRoutes() {
    const zoneImageStyle = {
      backgroundImage: "url('/vv.jpg')",
      backgroundSize: "cover",
      width: "100%",
      height: "100%"
    };

    const rowStyle = {
      minHeight: "300px",
      marginBottom: "200px"
    };

    return (
      this.props.zone && (
        <React.Fragment>
          <h1>Zones > {this.props.zone.name}</h1>
          <Alert />
          <div style={rowStyle} className="row">
            <div className="col-sm-4">
              <div style={zoneImageStyle} />
            </div>
            <div className="col-sm-8">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Grade</th>
                    <th />
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.props.routes.map(route => (
                    <tr key={route.id}>
                      <td>{route.name}</td>
                      <td>{route.grade}</td>
                      <td>
                        <button
                          className="btn btn-link"
                          onClick={() =>
                            this.props.history.push(
                              `/gyms/${this.props.match.params.gymId}/zones/${
                                this.props.match.params.zoneId
                              }/routes/${route.id}`
                            )
                          }
                        >
                          View
                        </button>
                      </td>

                      <td>
                        <SendButton route={route} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <button
                className="btn btn-outline-primary mb-2"
                onClick={() =>
                  this.props.history.push(
                    `/gyms/${this.props.match.params.gymId}/zones/${
                      this.props.match.params.zoneId
                    }/create`
                  )
                }
              >
                Create Route
              </button>
            </div>
          </div>
        </React.Fragment>
      )
    );
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path={"/gyms/:gymId/zones/:zoneId"}
          render={props => this.renderZoneRoutes()}
        />
        <Route
          exact
          path={"/gyms/:gymId/zones/:zoneId/create"}
          render={props =>
            this.props.zone && (
              <div>
                <h1>Zones > {this.props.zone.name} > Create Route</h1>

                <CreateRoute />
              </div>
            )
          }
        />

        <Route
          exact
          path={"/gyms/:gymId/zones/:zoneId/routes/:routeId"}
          render={props =>
            this.props.zone && (
              <div>
                <h1>Zones > {this.props.zone.name} > testing</h1>

                <GymRoute />
              </div>
            )
          }
        />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  gym: state.gym,
  routes: state.routes,
  zone: state.zone,
  user: state.user,
  sends: state.sends
});

const mapDispatchToProps = dispatch => ({
  getZoneRoutes: zoneId => {
    dispatch(getZoneRoutes(zoneId));
  },
  getZone: zoneId => {
    dispatch(getZone(zoneId));
  },
  sendRoute: routeId => {
    dispatch(sendRoute(routeId));
  },
  getSends: userId => {
    dispatch(getSends(userId));
  },
  unsendRoute: routeId => {
    dispatch(unsendRoute(routeId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ZoneRoutes);
