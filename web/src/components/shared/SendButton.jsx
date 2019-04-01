import React from "react";
import { connect } from "react-redux";
import LoadingButton from "./LoadingButton";
import unsendRoute from "../../actions/unsendRoute.action";
import sendRoute from "../../actions/sendRoute.action";

class SendButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        {!this.props.sends.find(
          send =>
            send.routeId === this.props.route.id &&
            send.userId === this.props.user.id
        ) && (
          <LoadingButton
            icon="check"
            text="Send"
            onClick={() => this.props.sendRoute(this.props.route.id)}
          />
        )}

        {this.props.sends.find(
          send =>
            send.routeId === this.props.route.id &&
            send.userId === this.props.user.id
        ) && (
          <LoadingButton
            icon="times"
            text="Unsend"
            type="danger"
            onClick={() => this.props.unsendRoute(this.props.route.id)}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  sends: state.sends,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  sendRoute: routeId => {
    dispatch(sendRoute(routeId));
  },
  unsendRoute: routeId => {
    dispatch(unsendRoute(routeId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendButton);
