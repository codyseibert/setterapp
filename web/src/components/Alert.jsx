import React from "react";
import { connect } from "react-redux";
import closeAlert from "../actions/closeAlert.action";

class Alert extends React.Component {
  render() {
    return (
      this.props.alert && (
        <div
          className={`alert alert-${this.props.alert.type} fade show`}
          role="alert"
        >
          {this.props.alert.message}
          <button
            type="button"
            className="close"
            onClick={() => this.props.closeAlert()}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )
    );
  }
}

const mapStateToProps = state => ({
  alert: state.alert
});

const mapDispatchToProps = dispatch => ({
  closeAlert: gymId => {
    dispatch(closeAlert(gymId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alert);
