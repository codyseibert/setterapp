import React from "react";
import getGym from "../../actions/getGym.action";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import Home from "./Home";
import Routes from "./Routes/Routes";
import GymRoute from "./GymRoute";
import Climbers from "./Climbers";
import Zones from "./Zones/Zones";
import SideNavigation from "./SideNavigation";
import UserProfile from "./UserProfile";

class Gym extends React.Component {
  componentDidMount() {
    this.props.getGym(parseInt(this.props.match.params.gymId));
  }

  renderGymBanner() {
    const bannerStyle = {
      backgroundImage: "url('/vv.jpg')",
      width: "100%",
      height: "180px",
      backgroundSize: "100%",
      backgroundPosition: "0px 40%"
    };

    const logoStyle = {
      backgroundImage: "url('/vvlogo.png')",
      width: "240px",
      height: "180px",
      backgroundSize: "cover",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)"
    };

    return (
      <div className="row">
        <div style={bannerStyle} className="col-sm-12">
          <div style={logoStyle} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderGymBanner()}
        <div className="row pt-4">
          <div className="col-sm-2">
            <SideNavigation
              history={this.props.history}
              match={this.props.match}
            />
          </div>
          <div className="col-sm-10">
            <Switch>
              <Route
                exact
                path={`${this.props.match.url}`}
                render={props => (
                  <Home gymId={this.props.match.params.gymId} {...props} />
                )}
              />
              <Route
                exact
                path={`${this.props.match.url}/routes/:routeId`}
                render={props => (
                  <GymRoute gymId={this.props.match.params.gymId} {...props} />
                )}
              />
              <Route
                path={`${this.props.match.url}/routes`}
                render={props => (
                  <Routes gymId={this.props.match.params.gymId} {...props} />
                )}
              />
              <Route
                path={`${this.props.match.url}/zones`}
                render={props => (
                  <Zones gymId={this.props.match.params.gymId} {...props} />
                )}
              />
              <Route
                exact
                path={`${this.props.match.url}/climbers`}
                render={props => (
                  <Climbers gymId={this.props.match.params.gymId} {...props} />
                )}
              />
              <Route
                exact
                path={`${this.props.match.url}/climbers/:userId`}
                render={props => (
                  <UserProfile
                    gymId={this.props.match.params.gymId}
                    {...props}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

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
