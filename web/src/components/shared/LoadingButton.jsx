import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LoadingButton extends React.Component {
  render() {
    return (
      <button
        disabled={this.props.loading}
        className={`btn btn-outline-${this.props.type || "primary"} mb-2`}
        onClick={this.props.onClick}
      >
        {this.props.loading && (
          <FontAwesomeIcon className="fa-spin spinner mr-2" icon="spinner" />
        )}
        {!this.props.loading && (
          <FontAwesomeIcon icon={this.props.icon} className="mr-2" />
        )}
        {this.props.text}
      </button>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoadingButton)
);
