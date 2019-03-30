import React from "react";
import getUsers from "../../actions/getUsers.action";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Climber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
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
      paddingRight: "20px",
      cursor: "pointer"
    };
    return (
      <div
        onClick={this.props.onClick}
        style={climberDivStyle}
        className="mb-4"
      >
        <div style={climberImageStyle} />
        <div className="text-center">{this.props.climber.name}</div>
      </div>
    );
  }
}

class Climbers extends React.Component {
  componentDidMount() {
    this.props.getUsers(parseInt(this.props.gymId));
  }

  render() {
    const renderClimbers = () => {
      return (
        <React.Fragment>
          {this.props.users.map(user => (
            <div key={user.id} className="col-md-2">
              <Climber
                onClick={() =>
                  this.props.history.push(
                    `/gyms/${this.props.gymId}/climbers/${user.id}`
                  )
                }
                climber={user}
              />
            </div>
          ))}
        </React.Fragment>
      );
    };

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-12 mb-4">
            <h1>Climbers</h1>
          </div>
        </div>
        <div className="row">{renderClimbers()}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  gym: state.gym,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  getUsers: gymId => {
    dispatch(getUsers(gymId));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Climbers)
);
