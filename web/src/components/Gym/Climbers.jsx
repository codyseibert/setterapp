import React from "react";
import PropTypes from "prop-types";
import getGym from "../../actions/getGym.action";
import { connect } from "react-redux";

class Climbers extends React.Component {
  componentDidMount() {
    this.props.getGym(parseInt(this.props.gymId));
  }

  render() {
    const renderClimber = card => {
      const climberImageStyle = {
        borderRadius: "50%",
        width: "100%",
        paddingBottom: "100%",
        backgroundImage: "url('/me.jpg')",
        backgroundSize: "cover"
      };
      const climberDivStyle = {
        fontSize: "24px",
        paddingLeft: "20px",
        paddingRight: "20px"
      };
      return (
        <div style={climberDivStyle} className="mb-4">
          <div style={climberImageStyle} />
          <div className="text-center">Cody Seibert</div>
        </div>
      );
    };

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-12 mb-4">
            <h1>Climbers</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            {renderClimber()}
            {renderClimber()}
            {renderClimber()}
          </div>
          <div className="col-sm-2">
            {renderClimber()}
            {renderClimber()}
            {renderClimber()}
          </div>
          <div className="col-sm-2">
            {renderClimber()}
            {renderClimber()}
            {renderClimber()}
          </div>
          <div className="col-sm-2">
            {renderClimber()}
            {renderClimber()}
            {renderClimber()}
          </div>
          <div className="col-sm-2">
            {renderClimber()}
            {renderClimber()}
            {renderClimber()}
          </div>
          <div className="col-sm-2">
            {renderClimber()}
            {renderClimber()}
            {renderClimber()}
          </div>
        </div>
      </React.Fragment>
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
)(Climbers);
