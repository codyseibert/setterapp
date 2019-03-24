import React from "react";
import getNotifications from "../../actions/getNotifications.action";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingButton from "../shared/LoadingButton";
import moment from "moment";

class GymNotifications extends React.Component {
  componentDidMount() {
    this.props.getNotifications(parseInt(this.props.gymId));
  }

  render() {
    return (
      <div>
        <h2>Notifications</h2>
        {this.props.notifications.map(notification => (
          <div className="card" key={notification.id}>
            <div className="card-body">
              <p className="card-text">{notification.message}</p>
            </div>

            <div className="card-footer">
              <small className="text-muted">
                {moment(notification.createdAt).format("LLL")}
              </small>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notifications: state.notifications
});

const mapDispatchToProps = dispatch => ({
  getNotifications: gymId => {
    dispatch(getNotifications(gymId));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GymNotifications)
);
