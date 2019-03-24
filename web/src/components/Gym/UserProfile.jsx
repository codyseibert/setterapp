import React from "react";
import getUser from "../../actions/getUser.action";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingButton from "../shared/LoadingButton";

class Home extends React.Component {
  componentDidMount() {
    this.props.getUser(parseInt(this.props.match.params.userId));
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
      <div className="row">
        <div className="col-sm-2">
          <div style={imageDiv} />
        </div>
        <div className="col-sm-8">
          <h1>{this.props.profile.name}</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gym: state.gym,
  user: state.user,
  profile: state.profile,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  getUser: userId => {
    dispatch(getUser(userId));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
