import React from "react";
import getRoute from "../../actions/getRoute.action";
import createLike from "../../actions/createLike.action";
import getSendsForRoute from "../../actions/getSendsForRoute.action";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingButton from "../shared/LoadingButton";
import LikeButton from "../shared/LikeButton";
import SendButton from "../shared/SendButton";
import Comments from "./Routes/Comments";
import Sends from "./Routes/Sends";
import ArchiveRouteButton from "../shared/ArchiveRouteButton";

class GymRoute extends React.Component {
  componentDidMount() {
    this.props.getRoute(parseInt(this.props.match.params.routeId));
  }

  render() {
    const zoneImageStyle = {
      backgroundImage: "url('/vv.jpg')",
      width: "100%",
      paddingBottom: "100%",
      backgroundSize: "cover"
    };

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-4">
            <div style={zoneImageStyle} />
          </div>

          <div className="col-sm-8">
            <h1>{this.props.route.name}</h1>
            {this.props.route.archived && <small>Archived</small>}

            {!this.props.route.archived && (
              <SendButton route={this.props.route} />
            )}
            {!this.props.route.archived && (
              <LikeButton route={this.props.route} />
            )}
            {!this.props.route.archived && (
              <ArchiveRouteButton route={this.props.route} />
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Comments routeId={this.props.match.params.routeId} />
          </div>
          <div className="col-md-6">
            <Sends routeId={this.props.match.params.routeId} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  gym: state.gym,
  user: state.user,
  profile: state.profile,
  route: state.route,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  getRoute: routeId => {
    dispatch(getRoute(routeId));
  },
  createLike: routeId => {
    dispatch(createLike(routeId));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GymRoute)
);
