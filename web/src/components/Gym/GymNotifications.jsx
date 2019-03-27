import React from "react";
import getNotifications from "../../actions/getNotifications.action";
import deleteNotification from "../../actions/deleteNotification.action";
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
              <div className="row">
                <div className="col-sm-8 text-center">
                  <p className="card-text">{notification.message}</p>
                </div>

                <div className="col-sm-4">
                  <LoadingButton
                    text="Delete"
                    icon="times"
                    type="danger"
                    onClick={() => {
                      this.props.deleteNotification(notification.id);
                    }}
                  />
                </div>
              </div>
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
  },
  deleteNotification: notificationId => {
    dispatch(deleteNotification(notificationId));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GymNotifications)
);
