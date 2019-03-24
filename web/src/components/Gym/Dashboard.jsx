import React from "react";
import PropTypes from "prop-types";
import getGym from "../../actions/getGym.action";
import { connect } from "react-redux";

class Dashboard extends React.Component {
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
        <div className="col-sm">
          <h1>Gym Dashboard {this.props.gym.name}</h1>
        </div>
        <div className="col-sm" />
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
)(Dashboard);
