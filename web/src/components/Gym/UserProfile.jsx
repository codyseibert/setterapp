import React from "react";
import getUser from "../../actions/getUser.action";
import getSends from "../../actions/getSends.action";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingButton from "../shared/LoadingButton";
import moment from "moment";

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.getUser(parseInt(this.props.match.params.userId));
    this.props.getSends(parseInt(this.props.match.params.userId));
  }

  renderSends() {
    return this.props.sends.map(send => (
      <div className="card" key={send.id}>
        <div className="card-body">
          <p className="card-text">
            Sent {send.routeName || send.routeId} ({send.grade}) on zonee{" "}
            {send.zoneName}
          </p>
        </div>

        <div className="card-footer">
          <small className="text-muted">
            {moment(send.createdAt).format("LLL")}
          </small>
        </div>
      </div>
    ));
  }

  render() {
    const imageDiv = {
      width: "100%",
      paddingBottom: "100%",
      borderRadius: "50%",
      backgroundImage: "url('/me.jpg')",
      backgroundSize: "cover"
    };

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-2">
            <div style={imageDiv} />
          </div>
          <div className="col-sm-8">
            <h1>{this.props.profile.name}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h1>Latest Sends</h1>
            {this.renderSends()}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  gym: state.gym,
  user: state.user,
  sends: state.sends,
  profile: state.profile,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  getUser: userId => {
    dispatch(getUser(userId));
  },
  getSends: userId => {
    dispatch(getSends(userId));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserProfile)
);
