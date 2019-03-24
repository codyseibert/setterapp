import React from "react";
import getGym from "../../actions/getGym.action";
import setAsHomeGym from "../../actions/setAsHomeGym.action";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import LoadingButton from "../shared/LoadingButton";
import GymNotifications from "./GymNotifications";

class Home extends React.Component {
  componentDidMount() {
    this.props.getGym(parseInt(this.props.gymId));
  }

  render() {
    const bannerDiv = {
      width: "100%",
      height: "300px",
      backgroundImage: "url('/aiguille.jpg')",
      backgroundSize: "cover"
    };

    return (
      <div>
        <div className="row">
          <div className="col-sm">
            <h1>{this.props.gym.name}</h1>
            {`${this.props.user.gymId}` !== this.props.gymId && (
              <LoadingButton
                text="Set as Home Gym"
                icon="home"
                onClick={() =>
                  this.props.setAsHomeGym(parseInt(this.props.gymId))
                }
              />
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <GymNotifications gymId={this.props.gymId} />
          </div>
          <div className="col-sm-8" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gym: state.gym,
  user: state.user,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  getGym: gymId => {
    dispatch(getGym(gymId));
  },
  setAsHomeGym: gymId => {
    dispatch(setAsHomeGym(gymId));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
