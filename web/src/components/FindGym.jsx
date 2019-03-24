import React from "react";
import getGyms from "../actions/getGyms.action";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingButton from "./shared/LoadingButton";
import getGymsHttp from "../http/getGyms.http";

class Profile extends React.Component {
  componentDidMount() {
    this.props.getGyms();
  }

  render() {
    const renderGymCard = gym => {
      return (
        <div key={gym.id} className="card mb-4">
          <img className="card-img-top" src="/vv.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{gym.name}</h5>
            <p className="card-text">999 Charles St, Longwood, FL 32750</p>
            <button
              onClick={() => this.props.history.push(`/gyms/${gym.id}`)}
              className="btn btn-primary"
              type="submit"
            >
              View
            </button>
          </div>
        </div>
      );
    };

    return (
      <div>
        <h1>Our Gyms</h1>
        <div className="row">
          <div className="col-sm-4">
            {this.props.gyms.map(
              (gym, idx) => idx % 3 === 0 && renderGymCard(gym)
            )}
          </div>

          <div className="col-sm-4">
            {this.props.gyms.map(
              (gym, idx) => idx % 3 === 1 && renderGymCard(gym)
            )}
          </div>

          <div className="col-sm-4">
            {this.props.gyms.map(
              (gym, idx) => idx % 3 === 2 && renderGymCard(gym)
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gym: state.gym,
  gyms: state.gyms,
  user: state.user,
  profile: state.profile,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  getGyms: () => {
    dispatch(getGyms());
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
);
