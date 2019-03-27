import React from "react";
import { connect } from "react-redux";
import LoadingButton from "./LoadingButton";
import archiveRoute from "../../actions/archiveRoute.action";

class ArchiveRouteButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <LoadingButton
          text="Archive"
          type="danger"
          icon="archive"
          onClick={() => {
            this.props.archiveRoute(this.props.route.id);
          }}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  likes: state.likes
});

const mapDispatchToProps = dispatch => ({
  archiveRoute: routeId => {
    dispatch(archiveRoute(routeId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArchiveRouteButton);
