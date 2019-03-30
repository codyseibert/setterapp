import React from "react";
import getSetters from "../../actions/getSetters.action";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import LoadingButton from "../shared/LoadingButton";

class Setter extends React.Component {
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
        <div className="text-center">{this.props.setter.name}</div>
      </div>
    );
  }
}

class Setters extends React.Component {
  componentDidMount() {
    this.props.getSetters(parseInt(this.props.gymId));
  }

  renderSetters(setters) {
    return (
      <div className="row">
        {setters.map(setter => (
          <div key={setter.id} className="col-md-2">
            <Setter
              setter={setter}
              onClick={() =>
                this.props.history.push(
                  `/gyms/${this.props.gymId}/setters/${setter.id}`
                )
              }
            />
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-12 mb-4">
            <h1>Setters</h1>
            <LoadingButton
              onClick={() =>
                this.props.history.push(
                  `/gyms/${this.props.gymId}/setters/create`
                )
              }
              icon="plus"
              text="Create Setter"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1>Active</h1>
          </div>
        </div>
        {this.renderSetters(this.props.setters.filter(s => s.active))}

        <div className="row">
          <div className="col">
            <h1>Inactive</h1>
          </div>
        </div>
        {this.renderSetters(this.props.setters.filter(s => !s.active))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  gym: state.gym,
  setters: state.setters
});

const mapDispatchToProps = dispatch => ({
  getSetters: gymId => {
    dispatch(getSetters(gymId));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Setters)
);
